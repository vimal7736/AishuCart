
import { useState } from "react";
import Catagory from "./Catagory/Catagory";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";

const Sidebar = ({isOpen, handleChange }) => {
 
  return (
    <>
      <section className={`sidebar ${isOpen ? 'open':''}`}>
      
        <div className="logo-container">
          <h1>Filter Cart</h1>
        </div>
        <Catagory handleChange={handleChange}  />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange}  />
      </section>
    </>
  );
};

export default Sidebar;
