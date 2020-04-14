import React, { ReactElement, useContext } from "react";
import { ContextSettings } from '../../context/contextSettings';
import BtnAnimation from "./btnAnimation";
const shortid = require("shortid");

let stacks = [
    ["electron", "ts", "react", "firebase", "express","https://github.com/Arimanecro/monstrochat"],
    ["node", "js", "https://github.com/Arimanecro/SDM"],
    ["react", "ts", "pwa", "https://github.com/Arimanecro/MyPortfolio"],
    ["express", "graphql", "mongo", "firebase", "https://github.com/Arimanecro/ExpressRoboShop--https://expressjs-roboshop.herokuapp.com"],
    ["node", "mongo", "pwa", "https://github.com/Arimanecro/RoboshopNode--https://nodejs-roboshop.herokuapp.com"],
    ["react", "ts", "firebase", "https://github.com/Arimanecro/ReactRoboShop--https://react-roboshop.000webhostapp.com"],
    ["js", "https://github.com/Arimanecro/GoblinSlider--https://arimanecro.github.io/goblin"],
    ["php", "mysql", "https://github.com/Arimanecro/RoboshopPantheon--https://pantheon-roboshop.herokuapp.com"],
    ["php", "https://github.com/Arimanecro/Pantheon--https://pantheon-framework.herokuapp.com/"]
]

export default (): ReactElement => {

    let [settings, setSettings] = useContext(ContextSettings);

    let list = stacks.map(
        (stack, key) => {
            ++key;
            return (
                <div key={shortid.generate()}
                    className="wrapperStack"
                    style={ (key === 1) ? {marginTop: localStorage.first ? (localStorage.first) : '0px'} : null }
                    id={(key === 1) ? "first" : null}
                    data-stack={`${stack.toString()}`}
                    onClick={(e) => {
                        if (!settings.animation && !settings.turnOffAnimation) {
                            setSettings({
                                ...settings,
                                animation: true,
                                wizardStatus: "attack",
                                openPortal: true,
                                appearingPortal: !settings.appearingPortal ? 1 : 2,
                                link: stack.toString().split(",")[stack.length - 1],
                                getLinks: false,
                                stack: e.currentTarget.dataset.stack.split(",")
                            });
                        }
                        if (settings.turnOffAnimation) {
                            {
                                setSettings(
                                    {
                                        ...settings,
                                        animation: true,
                                        link: stack.toString().split(",")[stack.length - 1],
                                        getLinks: false,
                                        bounceInUp: false
                                    }
                                )
                            }
                        }
                    }}
                >
                    <span style={(key === 1) ? { marginRight: "6px" } : { marginRight: "0px" }}>{key}.</span>
                    <div className="stack">
                        {stack.map((tech) => {
                            if (!tech.includes("git")) {
                                return (<div key={shortid.generate()} className={`icon icon_${tech}`}></div>);
                            }
                        })}
                    </div>
                </div>
            );
        }

    return (
        <div id="stacks">
            <BtnAnimation />
            <h1>STACKS:</h1>
            <div id="wrappListStack">
                {list}
            </div>
        </div>)
})