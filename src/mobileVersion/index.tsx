import React, { FunctionComponent, ReactElement } from "react";
import { render } from "react-dom";
import styled from 'styled-components';
import Grass from './components/grass';
import Menu from './components/menu';

const Wrapp = styled.div`
  width: 100%;
  min-height: 100vh;
  height:auto;
  position: relative;
`;
const WrappMenu = styled.div`
  display:flex;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height:auto;
  position: relative;
  background:#182f3b;
`;
export const Portfolio:FunctionComponent = (): ReactElement => {
  if(localStorage.device) {
    document.getElementsByTagName("head")[0].insertAdjacentHTML(
      "beforeend",
      "<link rel=\"stylesheet\" href=\"./mobileVersion.68783d3c.css\" />");
    }
  return (
      <Wrapp>
        <Grass top />
        <WrappMenu>
          <Menu />
        </WrappMenu>
        <Grass />
      </Wrapp>
  );
};

render(React.createElement(Portfolio), document.getElementById("root"));
