import React, { ReactElement } from "react";

export default (): ReactElement => {
  return (
    <section id="wrapper_undeground">
      <div id="undeground">
        <div id="dev"></div>
        <div className="leg"></div>
        <div id="leg_two" className="leg"></div>
        <div id="laptop"></div>
        <div id="wifi"></div>
        <section id="wrapper_infoBlocks">
          <div className="infoBlock">
            <h1>about portfolio</h1>
            <ul id="about_portfolio">
              <li>(1) - Current Portfolio</li>
              <li><span>(2-4, 6)</span> - The same simple e-shop, but difference stacks</li>
              <li>(5) - Goblin Slider(carousel). My first JS app :)</li>
              <li>(7) - Thematic (decicated to Ancient Egypt Gods) PHP Framework</li>
            </ul>
          </div>
          <div className="infoBlock">
            <h1>skills</h1>
            <div className="frontend">
              <h1>frontend:</h1>
              <ul>
                <li>- html, css</li>
                <li>- javascript, typescript, react</li>
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
          <div className="infoBlock contact">
            <div className="foto"></div>
            <h1>contacts</h1>
            <p className="infostring"><span>FIRST NAME:</span> Serghey</p>
            <p className="infostring"><span>LAST NAME:</span> Didac</p>
            <p className="infostring">arimanecro@gmail.com</p>
          </div>
        </section>
      </div>
    </section>
  );
}