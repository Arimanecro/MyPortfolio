import React, { ReactElement, useState } from "react";
import { ContextSettings } from '../context/contextSettings';
import { Cemetery } from './static_scenery/cemetery';
import { Wizard } from "./wizard";
import Portal from "./portal";
import Characters from "./characters";
import Reference from "./reference";
import StackMenu from "./UI/stackMenu";
import { Grass } from "./static_scenery/grass";
import { Coffin } from "./static_scenery/coffin";
import { Ghost } from "./static_scenery/ghost";
import { Hands } from "./static_scenery/hands";

export default (): ReactElement => {

  let settings = useState({
    turnOffAnimation: false,
    animation: false,
    bounceInUp: false,
    wizardStatus: "appearing",
    openPortal: false,
    appearingPortal: 0,
    link: "",
    getLinks: null,
    stack: []
  });
  return (
    <Cemetery>
      <Grass />
      <Coffin />
      <Ghost />
      <ContextSettings.Provider value={settings}>
        <StackMenu />
        <Wizard />
        <Portal />
        <Hands />
        <Reference />
        <Characters />
      </ContextSettings.Provider>
    </Cemetery>
  );
}