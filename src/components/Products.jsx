import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "./List";
import Header from "./Header";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectCat, setSelectCat] = useState("0");
  const [Search, setSearch] = useState("");
  const [copyPrd,setCopy]=useState([])
  const [cart,setCart]=useState([])

  const handleOnChangeCat = (e) => {
    setSelectCat(e.target.value);
  };
  const handleOnChangeSear = (e) => {
    setSearch(e.target.value);
  };
  const addCart=(products)=>{
    setCart((prevcart)=>[...prevcart,products])
  }
  useEffect(() => {
    async function getProducts() {
      if (selectCat === "0") {
        const claimP = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        setProducts(claimP.data);
        setCopy(claimP.data)
      } else {
        const claimP = await axios.get(
          `https://api.escuelajs.co/api/v1/categories/${selectCat}/products`
        );
        setProducts(claimP.data);
      }
    }
    getProducts();
  }, [selectCat]);

  useEffect(() => {
    if(Search !== ""){
      const filtered = copyPrd.filter(prd=>prd.title.toLowerCase().includes(Search.toLowerCase()))
      setProducts(filtered);
    }
    else{
      setProducts(copyPrd)
    }
  }, [Search]);

  useEffect(() => {
    async function getCat() {
      const claimC = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
      );
      setCategories(claimC.data);
    }
    getCat();
  }, []);

  return (
    <div>
      
      <Header handleOnChangeSear={handleOnChangeSear} val={Search} cart={cart} />
      <select onChange={handleOnChangeCat} name="" id="">
        <option value="0">All The Products</option>
        {categories.map((cat) => (
          <option value={cat.id}>{cat.name}</option>
        ))}
      </select>
      <List products={products} addCart={addCart} />
    </div>
  );
}
