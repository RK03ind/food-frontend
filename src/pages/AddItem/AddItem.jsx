import { useState } from "react";
import useForm from "../../hooks/useForm";
import usePostItems from "../../hooks/usePostItems";

const AddItem = () => {
  const initialState = {
    uid: "",
    image: "",
    title: "",
    description: "",
    estimateMeals: "",
    status: "available",
    listingType: "donation",
  };

  const [formData, handleChange] = useForm(initialState);
  const [selectedFile, setSelectedFile] = useState(null);
  const { mutate, isLoading, isError, isSuccess } = usePostItems(
    "http://localhost:5000/api/list"
  );

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("uid", formData.uid);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("estimateMeals", formData.estimateMeals);
    formDataToSend.append("status", formData.status);
    formDataToSend.append("listingType", formData.listingType);
    if (selectedFile) {
      formDataToSend.append("image", selectedFile);
    }

    mutate(formDataToSend);
  };

  return (
    <div>
      <h1>Create Listing</h1>
      <form onSubmit={handleSubmit}>
        <label>
          UID:
          <input
            type="number"
            name="uid"
            value={formData.uid}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Image:
          <input type="file" name="image" onChange={handleFileChange} />
        </label>
        <br />
        <br />
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <br />
        <label>
          Estimated Meals:
          <input
            type="number"
            name="estimateMeals"
            value={formData.estimateMeals}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Status:
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Listing Type:
          <select
            name="listingType"
            value={formData.listingType}
            onChange={handleChange}
          >
            <option value="donation">Donation</option>
            <option value="request">Request</option>
          </select>
        </label>
        <br />
        <br />
        <button type="submit" disabled={isLoading}>
          Create Listing
        </button>
      </form>
      {isSuccess && (
        <div style={{ color: "green" }}>Listing created successfully!</div>
      )}
      {isError && <div style={{ color: "red" }}>Failed to create listing</div>}
    </div>
  );
};

export default AddItem;
