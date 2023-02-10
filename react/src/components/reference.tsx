import React, { ReactElement, useContext } from "react";
import { ContextSettings } from '../context/contextSettings';

export default (): ReactElement => {
    let [settings, ctxSettings] = useContext(ContextSettings);

    if (settings.turnOffAnimation) {
        if (settings.getLinks === null) {
            return (<></>);
        }
        else if (settings.getLinks === false && settings.bounceInUp === false) {
            ctxSettings({ ...settings, bounceInUp: true })
            return (<></>);
        }
        else if (settings.getLinks === false && settings.bounceInUp === true) {
            let link = settings.link.split('--');
            return (
                <>
                    {link[1] ? <a href={link[1]} target="_blank" id="link" style={{ animation: "bounceInUp_link .73s ease forwards, pulse_animation 1.25s 1s  linear infinite" }}></a> : ""}
                    <a href={link[0]} target="_blank" id="github" style={{ animation: "bounceInUp .73s ease forwards, pulse_animation 1.25s .75s linear infinite" }}></a>
                </>
            )
        }
    }
    else {
        if (settings.getLinks) {
            let link = settings.link.split('--');
            return (
                <>
                    {link[1] ? <a href={link[1]} target="_blank" id="link" style={{ animation: "bounceInUp_link .73s ease forwards, pulse_animation 1.25s 1s linear reverse infinite" }}></a> : ""}
                    <a href={link[0]} target="_blank" id="github" style={{ animation: "bounceInUp .73s ease forwards, pulse_animation 1.25s .75s linear infinite" }}></a>
                </>
            )
        }
    }
    return (<></>);
}