import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import Footer from "./Components/Footer";
import ProductModel from "./Components/ProductModel";
import Listing from "./Pages/ListingPage";
import ProdDeets from "./Pages/ProdDeets/proddeets";
import Cart from "./Pages/Cart";

const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  const [isOpenProdModel, setisOpenProdModel] = useState(false);

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries")
  },[]);

  const getCountry=async(url)=>{
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data)
      console.log(res.data.data)
    })
  }

  const values={
    countryList,
    setselectedCountry,
    selectedCountry,
    isOpenProdModel,
    setisOpenProdModel
  }
  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
    <Header/>
    <Routes>
      <Route path="/" exact={true} element={<Home/>}/>
      <Route path="/cat/:id" exact={true} element={<Listing/>}/>
      <Route exact={true} path="/product/:id" element={<ProdDeets />}/>
      <Route exact={true} path="/cart" element={<Cart />}/>
    </Routes>
    <Footer/>
    {
      isOpenProdModel=== true &&  <ProductModel/>
    }     
    </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export {MyContext}
