import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import CartPage from "./components/CartPage";

function App() {
  return (
    <>
      
      <Routes>
        <Route index element={<Products />} />
        <Route path="Purchases" element={<CartPage />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
