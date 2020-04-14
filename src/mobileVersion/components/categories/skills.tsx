import React, { ReactElement } from "react";
import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
.frontend {
  width: 100%;
  height: auto;
  text-align: left;
  margin-bottom: 32px;
  padding-left: 10px;
}
.frontend h1 {
  text-align:left;
  color: #3e8216;
  font-size: 24px;
  text-decoration: none;
  padding-bottom: 0px;
}
.frontend ul {
  margin-top: 16px;
}
.frontend ul > li {
  text-align:left;
  display: block;
  margin-bottom: 10px;
  color: #8612f6;
  font-size: 18px;
  font-family: "KreepTown";
  text-transform: capitalize;
  font-weight: bold;
}`;

export default (): ReactElement => {

  return (
    <>
      <Style />
      <div className="infoBlock">
        <h1>skills</h1>
        <div className="frontend">
          <h1>frontend:</h1>
          <ul>
            <li>- html, css</li>
            <li>- javascript, typescript, react, electron</li>
          </ul>
        </div>
        <div className="frontend">
          <h1 style={{ "color": "#c42d1d" }}>backend:</h1>
          <ul>
            <li>- nodejs, express, php, laravel</li>
            <li>- mysql, mongodb, firebase, graphql</li>
          </ul>
        </div>
      </div>
    </>
  );
}