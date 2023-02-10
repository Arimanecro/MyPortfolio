import React, { ReactElement, useContext } from "react";
import { ContextSettings } from '../context/contextSettings';

export default (): ReactElement => {
    let [settings] = useContext(ContextSettings);
    return settings.openPortal ? <div id="portal"
        style={{ animationDelay: (settings.appearingPortal === 1) ? "0.5s" : "0s" }}
    ></div> : <></>;
}