import React from 'react';
import Search from "./Search"
import img from "../images/2.jpg"
import logo from "../images/logo.png"
import { Row, Col, CardBody, Card } from "reactstrap";

const Header = () => (
  <div> 
  <div>
    <Row>
    <img src={logo} alt="" width="50px" style={{marginLeft:"3rem",marginRight:"2rem"}}/>
    <h1 style={{color:"lightblue",marginTop:"5px"}}>KSP JobFinder</h1>
  <p style={{marginLeft:"auto",marginTop:"5px",marginRight:"100px"}}><a href="/">SignOut</a></p>
    </Row>
    
  </div>
  <div style={{backgroundImage:`url(${img})`,backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',height:"50%"}}>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <header className="header">
    <div className="title">KSP JobFinder</div>
  </header>
  <Search/>
  <br/><br/><br/><br/> 
  <br/>
  </div>
  </div>
);

export default Header;
