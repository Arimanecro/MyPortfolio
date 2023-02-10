import React, { FunctionComponent, ReactElement } from "react";
import { render } from "react-dom";
import { createGlobalStyle } from 'styled-components';
import css from '../public/styles.css';
import GraveYard from './components/graveyard';
import Underground from './components/underground';
const CSS = createGlobalStyle`${css}`;
export const Portfolio: FunctionComponent = (): ReactElement => {

  if (localStorage.device) {
    document.getElementsByTagName("head")[0].insertAdjacentHTML(
      "beforeend",
      "<link rel=\"stylesheet\" href=\"./indexPC.e686e9d6.css\" />");
  }
  
  localStorage.first = "0px";
  
  return (
    <>
      <CSS />
      <GraveYard />
      <Underground />
    </>
  );
};

render(React.createElement(Portfolio), document.getElementById("root"));
