//TÙNG
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductContext } from "../../context/ProductContext";
import ProductList from "./ProductList";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { Footer } from "../Footer";
// API GET ALL PRODUCTS
export const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("name asc")
  const [inStock, setInStock] = useState(0);
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [fieldSort, setFieldSort] = useState("");
  const [typeSort, setTypeSort] = useState("")

  
  const GetAllProducts = async () => {
  
    await axios
      .get(`https://keyboard-shop.herokuapp.com/api/products?countInStock=${inStock}&priceFrom=${priceFrom}&priceTo=${priceTo}&fieldSort=${fieldSort}&typeSort=${typeSort}`)
      .then((res) => {
        const data = res.data;
 
        setProducts(data.allProduct);
        setIsLoading(false);
      })
      .catch((error) => console.log(`error: ${error}`));
  };
  useEffect(() => {
    GetAllProducts();
  }, [inStock, priceFrom, priceTo, fieldSort, typeSort]);

  
  const antIcon = (
    <LoadingOutlined
      style={{ fontSize: 64, justifyContent: "center", marginTop: 50 }}
      spin
    />
  );

  return (
    <ProductContext.Provider
      value={{
        products,
        setFieldSort,
        setTypeSort,
        setInStock,
        priceFrom,
        setPriceFrom,
        priceTo,
        setPriceTo,
        sort,
        setSort
      }}
    >
      <div>{isLoading ? <Spin indicator={antIcon} /> : <ProductList />}</div>
    </ProductContext.Provider>
  );
};
