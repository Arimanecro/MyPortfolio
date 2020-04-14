import React, { ReactElement, useContext } from "react";
import { ContextSettings } from '../context/contextSettings';
const shortid = require("shortid");

let personages = [
  "golemIce",
  "golemSwamp",
  "golemLava",
  "goblin",
  "troll",
  "orc",
  "fallenAngel",
  "reaper"
];

export default (): ReactElement => {

  let [settings, setSettings] = useContext(ContextSettings);

  let golems = shuffleArray(personages);

  if (settings.animation && !settings.turnOffAnimation) {

    let appearingPortal = (settings.appearingPortal === 1) ? 2 : 0;
    let delay = 0.5 + appearingPortal;
    let ms = 0.50;
    let jump = 1.40 + appearingPortal + 0.65;
    let rotate = 1.85 + appearingPortal + 0.65;
    let sizeReduction = 2.40 + appearingPortal + 0.65;
    let reduction = 2.45 + appearingPortal + 0.65;

    settings.stack.splice(-1, 1);

    let characters = settings.stack.map((icon, k: number) => {
      if (k !== 0) {
        (delay += ms).toPrecision(3);
        (jump += ms).toPrecision(2);
        (rotate += ms).toPrecision(2);
        (sizeReduction += ms).toPrecision(2);
        (reduction += ms).toPrecision(2);
      }

      let el = golems[k];
      return (
        <div
          key={shortid.generate()}
          className="character"
          id={el}
          style={{
            animation: `golem 0.55s linear ${delay}s forwards,
                     ${el}Running 0.35s steps(12) infinite,
                     golemMove 2s linear ${delay}s forwards,
                     golemJump 0.55s ease-in-out ${jump}s forwards,
                     golemRotate 0.55s linear ${rotate}s forwards,
                     sizeReduction 0.95s linear ${sizeReduction}s forwards,
                     reduction 1.25s linear ${reduction}s forwards`
          }}
          onAnimationEnd={e => {
            if (k == settings.stack.length - 1 && e.animationName == "reduction") {
              setSettings({
                ...settings,
                animation: false,
                wizardStatus: "idle",
                openPortal: true,
                appearingPortal: 2,
                getLinks: true
              });
            }
          }}>
          <div className={`sign ${icon}`}
            style={
              { animation: `rotateSign 0.15s ease ${rotate}s forwards` }
            }
          ></div>
        </div>
      );
    });
    return <>{characters}</>;
  }
  else {
    return (<></>)
  }

};

function shuffleArray(arr: string[]): string[] {
  return arr.sort(() => Math.random() - 0.5);
}