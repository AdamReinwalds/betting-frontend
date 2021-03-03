import React, { useState } from "react";
import { FaBeer } from 'react-icons/fa';
import { GiMatchbox } from 'react-icons/gi';
import { IoMdContacts } from 'react-icons/io';
import { AiOutlineInfoCircle } from 'react-icons/ai';

function Navbar() {
  const [clicked, setClicked] = useState(false)
  return (
    <div className="navbar1" id="myTopNav">
      <a className="navbar-logo" href="/">
        <img src="betsport.png" alt="bet-sport"/>
        <p className="name">BetSport</p>
      </a>
      <div className="nav-links"> 
        <a className="a-nav a1" href="/"> <FaBeer/> Home</a>
        <a className="a-nav a2" href="#matches"> <GiMatchbox/> Matches</a>
        <a className="a-nav a3" href="#contact"> <IoMdContacts/> Contact</a>
        <a className="a-nav a4" href="#about"> <AiOutlineInfoCircle/> About</a>
        <span className="menu" onClick = {()=> setClicked(!clicked)}>
          <i className="fa fa-bars"></i>
        </span>
  {clicked && <div>aids</div>}
      </div>
    </div>
  );
}
export default Navbar;
