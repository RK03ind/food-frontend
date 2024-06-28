import { Route, BrowserRouter, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddItem from "./pages/AddItem/AddItem";

const queryClient = new QueryClient();

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the Home Page</p>
  </div>
);

const NotFound = () => (
  <div>
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create-listing" element={<AddItem />} />
          <Route element={NotFound} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
