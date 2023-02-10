import React, { ReactElement, useState } from "react";
const shortid = require("shortid");
import { createGlobalStyle } from 'styled-components';
import js from '/public/img/signs/js.jpg';
import node from '/public/img/signs/node.png';
import express from '/public/img/signs/express.png';
import electron from '/public/img/signs/electron.png';
import ts from '/public/img/signs/ts.jpg';
import pwa from '/public/img/signs/pwa.png';
import mysql from '/public/img/signs/mysql.jpg';
import react from '/public/img/signs/react.png';
import firebase from '/public/img/signs/firebase.png';
import php from '/public/img/signs/php.png';
import mongo from '/public/img/signs/mongo.jpg';
import graphql from '/public/img/signs/graphql.png';
import git from '/public/img/github.png';
import link from '/public/img/link.png';

let stacks = [
  ["electron", "ts", "react",  "firebase", "express","https://github.com/Arimanecro/monstrochat"],
  ["node", "js", "https://github.com/Arimanecro/SDM"],
  ["react", "ts", "pwa", "https://github.com/Arimanecro/MyPortfolio"],
  ["express", "graphql", "mongo", "firebase", "https://github.com/Arimanecro/ExpressRoboShop--https://expressjs-roboshop.herokuapp.com"],
  ["node", "mongo", "pwa", "https://github.com/Arimanecro/RoboshopNode--https://nodejs-roboshop.herokuapp.com"],
  ["react", "ts", "firebase", "https://github.com/Arimanecro/ReactRoboShop--https://react-roboshop.000webhostapp.com"],
  ["js", "https://github.com/Arimanecro/GoblinSlider--https://arimanecro.github.io/goblin"],
  ["php", "mysql", "https://github.com/Arimanecro/RoboshopPantheon--https://pantheon-roboshop.herokuapp.com"],
  ["php", "https://github.com/Arimanecro/Pantheon--https://pantheon-framework.herokuapp.com/"]
]

const Style = createGlobalStyle`
    .wrapperStack {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        padding-left: 2px;
        margin-bottom: 12px;
        cursor: pointer;
      }
      .wrapperStack:first-child {
        margin-right: 6px;
      }
      .wrapperStack span {
        font-family: "KreepTown";
        font-size: 24px;
        font-weight: bold;
        text-transform: capitalize;
      }
      #stacks {
        width: 100vw;
        min-height: 100vh;
        height:auto;
        text-align: center;
        background: rgba(160, 196, 77, 0.51);
        position: absolute;
        right: 0;
      }
      #stacks h1 {
        font-family: "KreepTown";
        font-size: 24px;
        text-transform: capitalize;
        letter-spacing: 3px;
        clear: both;
        margin-top: 32px;
        margin-bottom: 8px;
      }
      #git {
        width: 48px;
        height: inherit;
        background: url(${git}) no-repeat center;
        background-size: contain;
        margin-right: 6px;
      }
      #link {
        width: 42px;
        height: inherit;
        background: url(${link}) no-repeat center;
        background-size: contain;
      }
      .stack {
        display: flex;
        align-items: center;
        width: 70%;
        height: 38px;
        position:absolute;
        padding-left: 4px;
        margin-right: 2px;
        margin-left: 3px;
        background-color: rgba(23, 24, 24, 0.67);
        overflow:hidden;
        position:relative;
      }
      .wrapp_links {
        position: absolute; 
        display: flex; 
        justify-content: center; 
        width: 50%; 
        height: inherit;
        margin-left: -52%;
        background: rgba(238, 195, 28, 0.85); 
        transition: all .75s ease;
      }
      .icon {
        width: 36px;
        height: 30px;
        margin-right: 8px;
      }
      .icon_js {
        background: url(${js}) no-repeat;
        background-size: contain;
      }
      .icon_node {
        background: url(${node}) no-repeat;
        background-size: contain;
      }
      .icon_express {
        background: url(${express}) no-repeat;
        background-size: contain;
      }
      .icon_ts {
        background: url(${ts}) no-repeat;
        background-size: contain;
      }
      .icon_react {
        background: url(${react}) no-repeat;
        background-size: contain;
      }
      .icon_pwa {
        background: url(${pwa}) no-repeat center;
        background-size: contain;
      }
      .icon_php {
        background: url(${php}) no-repeat;
        background-size: contain;
      }
      .icon_mysql {
        background: url(${mysql}) no-repeat;
        background-size: contain;
      }
      .icon_mongo {
        background: url(${mongo}) no-repeat;
        background-size: contain;
      }
      .icon_firebase {
        background: url(${firebase}) no-repeat;
        background-size: contain;
      }
      .icon_graphql {
        background: url(${graphql}) no-repeat;
        background-size: contain;
      }
      .icon_electron {
        background: url(${electron}) no-repeat;
        background-size: contain;
      }

      @keyframes links  {
        100% {
          margin-left: -2%;
        }
      }
    `;

export default (): ReactElement => {

  let [state, setState] = useState(0);
  let links:()=>{};

  let list = stacks.map(
    (stack, key) => {
      ++key;
      links = () => stack[stack.length - 1].split('--');
      return (
        <div key={shortid.generate()}
          className="wrapperStack"
          data-stack={`${stack.toString()}`}
        >
          <span style={(key === 1) ? { marginRight: "6px" } : { marginRight: "0px" }}>{key}.</span>
          <div className="stack" onClick={()=>setState(key)} >
            <div onClick={(event)=>{ event.stopPropagation(); setState(0)}} className="wrapp_links" style={{animation: `${(state == key) ? 'links .45s ease forwards' : '' }`}}>
              <a href={`${links()[0]}`} target="_blank" id="git"></a>
              { links()[1] ? <a href={`${links()[1]}`} target="_blank" id="link"></a> : '' }
            </div>
            {stack.map((tech) => {
              if (!tech.includes("git")) {
                return (<div key={shortid.generate()} className={`icon icon_${tech}`}></div>);
              }
            })}
          </div>
        </div>
      );
    }
  );
  return (
    <>
      <Style />
      <div id="stacks">
        <h1>STACKS:</h1>
        {list}
      </div>
    </>
  )
}