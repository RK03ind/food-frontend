import styles from "./styles/ProductCard.module.css";

const ProductCard = ({ image, title, description, status }) => {
  return (
    <div className={styles.card}>
      {image ? (
        <img
          src={image || "default-image.jpg"}
          alt={title}
          className={styles.image}
        />
      ) : (
        "No image available"
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.status}>{status}</span>
      </div>
    </div>
  );
};

export default ProductCard;
