import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Gallery from "./components/pages/gallery/Gallery";
import PricesServices from "./components/pages/pricesServices/PricesServices";
import Contact from "./components/pages/contact/Contact";
import MentionsLegales from "./components/pages/mentionsLegales/MentionsLegales";
import PolicyPrivacy from "./components/pages/policyPrivacy/PolicyPrivacy";
import CacheClear from "./components/admin/CacheClear";
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

<Route path="/mentionsLegales" element={<MentionsLegales/>}/>
<Route path="/policyPrivacy" element={<PolicyPrivacy/>}/>
<Route path="/cacheClear" element={<CacheClear/>}/>
{/* <Route path="*" element={<NotFound/>}/> */}
</Routes>

</>
);

}


