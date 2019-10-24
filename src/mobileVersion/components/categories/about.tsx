import React, { ReactElement } from "react";
import { createGlobalStyle } from 'styled-components';
const Style = createGlobalStyle`
#about_portfolio {
    color: #14dcb7;
      text-align: left;
      font-family: "KreepTown";
      font-size: 21px;
      line-height: 32px;
      padding: 0 10px;
  }
  #about_portfolio > li {
    margin-bottom: 20px;
  }
`;
export default (): ReactElement => {

    return (
        <>
        <Style />
        <div className="infoBlock">
            <h1>about portfolio</h1>
            <ul id="about_portfolio">
              <li>(1) - Current Portfolio</li>
              <li><span>(2-4, 6)</span> - The same simple e-shop, but difference stacks</li>
              <li>(5) - Goblin Slider(carousel). My first JS app :)</li>
              <li>(7) - Thematic (decicated to Ancient Egypt Gods) PHP Framework</li>
            </ul>
        </div>
        </>
    );
}