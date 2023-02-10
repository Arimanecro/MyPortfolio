import React, { ReactElement, useState, useContext } from "react";
import { ContextSettings } from '../../context/contextSettings';

export default (): ReactElement => {
    let [settings, setSettings] = useState(true);
    let [cxtsettings, setCxtSettings] = useContext(ContextSettings);

    let bg = settings ? "check" : "uncheck";
    return (<div className={`${bg}`} id="checkAnimation" onClick={
        () => {
            setSettings(!settings);
            setCxtSettings({
                ...cxtsettings,
                turnOffAnimation: !cxtsettings.turnOffAnimation,
                animation: !cxtsettings.animation
            });
        }
    }>ANIMATION</div>)
}