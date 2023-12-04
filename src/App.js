import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Gallery from "./components/pages/gallery/Gallery";
import PricesServices from "./components/pages/pricesServices/PricesServices";
import Contact from "./components/pages/contact/Contact";
// import Navbar from "./components/navbar/Navbar";


export default function App() {

return (
<>
{/* <Navbar /> */}
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/gallery" element={<Gallery/>}/>
<Route path="/pricesServices" element={<PricesServices/>}/>
<Route path="/contact" element={<Contact/>}/>
{/* <Route path="*" element={<NotFound/>}/> */}
</Routes>
</>
);
}
