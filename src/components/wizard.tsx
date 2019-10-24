import React, { ReactElement, useContext, useState, useMemo } from "react";
import { ContextSettings } from '../context/contextSettings';

function shuffleArray(arr: string[]): string[] {
    return arr.sort(() => Math.random() - 0.5);
}

export const Wizard = (): ReactElement => {

    let [settings] = useContext(ContextSettings);
    let [state, setState] = useState({ action: 'appearing', count: 0 });

    let wiz = useMemo(() => shuffleArray(["fire", "ice"])[0], []);

    let statusAnimation = {
        'appearing': "wizard_appearance 0.4s steps(4)",
        "idle": `wizard_${wiz}_idle 0.65s steps(5) infinite`,
        "attack": `wizard_${wiz}_attack 0.5s steps(5)`
    }
    if (settings.wizardStatus == 'attack' && !state.count) {

        state.action = 'attack'
    }
    else if (settings.wizardStatus == 'attack' && state.count) {
        state.action = 'idle'
    }
    else if (settings.wizardStatus == 'idle' && state.count) {
        setState({ ...state, count: 0 });
    }
    return (

        <div className={`wizard_${wiz} wizard_${state.action} wizard_${wiz}_${state.action}`}
            style={{
                animation: statusAnimation[state.action],
                animationDirection: "normal",
                animationFillMode: "forwards"
            }}
            onAnimationEnd={e => {
                if (e.animationName == "wizard_appearance") {
                    setState({ ...state, action: "idle" });
                }

                if (e.animationName == `wizard_${wiz}_attack`) {
                    setState({ ...state, action: "idle", count: ++state.count });
                }

            }}></div>)
}