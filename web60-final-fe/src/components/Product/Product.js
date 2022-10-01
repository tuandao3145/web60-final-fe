//TÙNG
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductContext } from "../../context/ProductContext";
import ProductList from "./ProductList";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

// API GET ALL PRODUCTS
export const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("name asc");
  const [inStock, setInStock] = useState(0);
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [fieldSort, setFieldSort] = useState("");
  const [typeSort, setTypeSort] = useState("");
  const [productInCart, setProductInCart] = useState([]);

  const GetAllProducts = async () => {
    await axios
      .get(
        `https://keyboard-shop.herokuapp.com/api/products?countInStock=${inStock}&priceFrom=${priceFrom}&priceTo=${priceTo}&fieldSort=${fieldSort}&typeSort=${typeSort}`
      )
      .then((res) => {
        const data = res.data;
        setProducts(data.allProduct);
        setIsLoading(false);
        if (!localStorage.getItem("products")) {
          localStorage.setItem("products", JSON.stringify(data.allProduct));
        }
      })
      .catch((error) => console.log(`error: ${error}`));
  };

  const getProductForCart = () => {
    let json = localStorage.getItem("products");
    if (!json) {
      return [];
    } else {
      return JSON.parse(json);
    }
  };

  useEffect(() => {
    GetAllProducts();
    getProductForCart();
  }, [inStock, priceFrom, priceTo, fieldSort, typeSort]);

  const addToCart = (product) => {
    const newOrder = { ...product, amount: 1 };
    let productCart = [...productInCart];

    productCart = [...productInCart, newOrder];
    setProductInCart(productCart);
  };

  const inCreaseProduct = (id) => {
    const amountProduct = [...productInCart];
    const findItem = amountProduct.find((item) => item.id === id);
    if (!findItem) {
      return;
    } else {
      findItem.amount = findItem.amount + 1;
      setProductInCart(amountProduct);
    }
  };
  const deCreaseProduct = (id) => {
    const amountProduct = [...productInCart];
    const findItem = amountProduct.find((item) => item.id === id);
    if (!findItem) {
      return;
    } else {
      findItem.amount = findItem.amount - 1;
      let noAmount = amountProduct.filter((item) => item.amount !== 0);
      setProductInCart(noAmount);
    }
  };
  const deleteProductInCart = (id) => {
    const product = [...productInCart];
    const delProduct = product.filter((item) => item.id !== id);
    setProductInCart(delProduct);
  };

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
        setSort,
        addToCart,
        productInCart,
        inCreaseProduct,
        deCreaseProduct,
        deleteProductInCart,
      }}
    >
      <div>{isLoading ? <Spin indicator={antIcon} /> : <ProductList />}</div>
    </ProductContext.Provider>
  );
};
