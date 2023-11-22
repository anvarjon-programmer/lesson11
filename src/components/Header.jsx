import React, { useState } from "react";
import img from "../images/Logo.png";
import { FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {

 const [list, setList]=useState(true);
  console.log(list);


  return (
    <header>
      <nav>
        <div className="container">
        <div className="navbar">
          <ul className={list ? "navbar__list" : "out"}>
            <li className="fa-x">
              <button className="remove__btn"  onClick={()=>{setList(false); console.log(1)}}>
              X
              </button>
              </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Rankings</a>
            </li>
            <li>
              <a href="#">Connect a wallet</a>
            </li>
            <li>
              {/* <button className="navbar__lsit__btn">
              <FaUser className="faUser" />
              Sign Up
              </button> */}
            </li>
          </ul>
          <RxHamburgerMenu className="burger" onClick={()=>setList(true)}/>

        </div>
        </div>
      </nav>
    </header>
  );

  
}


