import React, { ReactElement, useState } from "react";
import { ContextSettings } from '../context/context';
import styled, { createGlobalStyle } from 'styled-components';
import Panel from './UI/panel';
import Nav from './UI/nav';
import wf from '../public/wf.css';

const Global = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    font-smooth: always;
  }

${wf}

.infoBlock {
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.71);
    padding-top: 37px;
    text-align: center;
    position: relative;
    z-index: 1;
  }

.infoBlock h1,
.frontend h1 {
  color: #e8e3e3;
  font-family: "KreepTown";
  font-size: 28px;
  font-weight: bold;
  text-transform: capitalize;
  text-decoration: underline;
  letter-spacing: 2px;
  padding-bottom: 28px;
}
`
const WrappMenu = styled.div`
    width: 100%;
    height: auto;
    display:flex;
    flex-direction: column;
`;

export default (): ReactElement => {

  let settings = useState({ category: 'stacks', go: false, close: false });

  return (
    <WrappMenu>
      <Global />
      <ContextSettings.Provider value={settings}>
        <Nav />
        <Panel />
      </ContextSettings.Provider>
    </WrappMenu>
  );
};