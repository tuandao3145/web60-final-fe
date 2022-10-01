import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./Cart";
import { HomePage } from "./HomePage";
import { LoginForm } from "./Profile/LoginForm";
import { NavBar } from "./NavBar";
import { Product } from "./Product/Product";
import axios from 'axios';
// import data from '../data/data'
import { ProductContext } from "../context/ProductContext";
import Annouce_1 from "./Annoucements/Annouce_1";
import Annouce_2 from "./Annoucements/Annouce_2";
import Annouce_3 from "./Annoucements/Annouce_3";
import Privacy from "./Other Links/Privacy";
import Refund from "./Other Links/Refund";
import Shipping from "./Other Links/Shipping";
import Term from "./Other Links/Term";
import HomeCategory from "./HomeCategory";
import { Footer } from "./Footer";
import { RegisterForm } from "./Profile/RegisterForm";
import { ForgotPassword } from "./Profile/ForgotPassword";
import { autoLogin } from "../model/user";
import Profile from "./Profile/Profile";



export default function KeyboardApp() {


    const [data, setData] = useState('');
    const [currentUser, setCurrentUser] = useState('');

    useEffect(() => {
    	axios.get('https://keyboard-shop.herokuapp.com/api/products').then((respone) => {
    		setData(respone.data);
    	});
    },[]);

    useEffect(() => {
        const theUser = autoLogin();
        setCurrentUser(theUser);
    }, []);
   

    return (
        <ProductContext.Provider value={{data, currentUser, setCurrentUser}}>
            <BrowserRouter>
                <NavBar />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product" element={<Product />} />

                    {/* Annoucements Route */}
                    <Route path="/Annouce_1" element={<Annouce_1 />} />
                    <Route path="/Annouce_2" element={<Annouce_2 />} />
                    <Route path="/Annouce_3" element={<Annouce_3 />} />

                    {/* Category Route */}
                    <Route path="/category/:id" element={<HomeCategory />} />

                    {/* Footer Route */}
                    <Route path="/Privacy" element={<Privacy />} />
                    <Route path="/Refund" element={<Refund />} />
                    <Route path="/Shipping" element={<Shipping />} />
                    <Route path="/Term" element={<Term />} />

                    {/* User Route */}
                    
                    <Route path="/account/login" element={<LoginForm />} />
                    <Route path="/account" element={<Profile />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </ProductContext.Provider>
    )
}