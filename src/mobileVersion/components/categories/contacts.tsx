import React, { ReactElement } from "react";
import { createGlobalStyle } from 'styled-components';
import clip from '/public/img/clip.png';

const Style = createGlobalStyle`

.contact p {
    padding-right: 5px;
    text-align: center;
    line-height: 45px;
  }
  .contact p span { text-decoration: underline; }
  
  .contact h1 {
    margin: 0 auto;
  }
  .contact p:nth-child(2) {
    color: #f8f47f;
    font-size: 46px;
    font-family: "Zombified";
    font-weight: bold;
    letter-spacing: 3px;
    padding-bottom: 20px;
  }
  .foto {
    width:68px;
    height: 70px;
    position: absolute;
    left: 0px;
    top: -13px;
    background: url(${clip}) no-repeat;
  }
  .infostring {
    color:#dfb200;
    font-size: 26px;
    font-family: 'B52';
  }   
`
export default (): ReactElement => {

  return (
    <>
      <Style />
      <div className="infoBlock contact">
        <div className="foto"></div>
        <h1>contacts</h1>
        <p className="infostring"><span>FIRST NAME:</span> Serghey</p>
            <p className="infostring"><span>LAST NAME:</span> Didac</p>
            <p className="infostring"><span>LOCATION:</span> MOLDOVA</p> 
            <p className="infostring">arimanecro@gmail.com</p>
      </div>
    </>
  )
}