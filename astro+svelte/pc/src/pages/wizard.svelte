<script context="module">
  // @ts-check
  /**
   * @param {string[]} arr
   * @returns {string[]}
   */
   var shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  /**
   * @type {string}
   */
   var wiz = shuffleArray(["fire", "ice"])[0];
</script>

<script>
  import { ContextSettings } from "../stores/wizard-context.js";

  /**
   * @type {HTMLElement}
   */
  var wizard;

  /**
   * @typedef {object} State
   * @property {string} action
   * @property {number} count
   */
  $: state = { action: "appearing", count: 0 };

  /**
   * @type {object}
   * @property {string} appearing
   * @property {string} idle
   * @property {string} attack
   */
  var statusAnimation = {
    appearing: "wizard_appearance 0.4s steps(4)",
    idle: `wizard_${wiz}_idle 0.65s steps(5) infinite`,
    attack: `wizard_${wiz}_attack 0.5s steps(5)`,
  };

  /**
   * @param {HTMLElement} e
   * @returns {State}
   */
  var onAnimationEnd = (e) => {
    if (e.animationName == "wizard_appearance") {
      state = { ...state, action: "idle" };
    }
    if (e.animationName == `wizard_${wiz}_attack`) {
      return (state = { ...state, action: "idle", count: ++state.count });
    }
  };

  $: {
    if (!$ContextSettings.turnOffAnimation) {
      if ($ContextSettings.wizardStatus == "attack" && !state.count) {
        state.action = "attack";
      } else if ($ContextSettings.wizardStatus == "attack" && state.count) {
        state.action = "idle";
      } else if ($ContextSettings.wizardStatus == "idle" && state.count) {
        state.count=0;
      }
    }
  }
</script>

<div
bind:this={wizard}
  on:animationend={onAnimationEnd}
  class={`wizard_${wiz} wizard_${state.action} wizard_${wiz}_${state.action}`}
  style={`animation: ${statusAnimation[state.action]};animation-direction: normal;animation-fill-mode: forwards;`}  
/>

<style>
  .wizard_appearing,
  .wizard_idle,
  .wizard_attack {
    width: 98px;
    height: 109px;
    position: absolute;
    left: 10px;
    will-change: contents;
  }
  .wizard_attack {
    width: 160px;
    height: 109px;
  }
  @keyframes -global-wizard_appearance {
    from {
      background-position: 0px;
    }
    to {
      background-position: -400px;
    }
  }
  @keyframes -global-wizard_fire_idle {
    from {
      background-position: 0px;
    }
    to {
      background-position: -500px;
    }
  }
  @keyframes -global-wizard_ice_idle {
    from {
      background-position: 0px;
    }
    to {
      background-position: -503px;
    }
  }
  @keyframes -global-wizard_fire_attack {
    from {
      background-position: 0px;
    }
    to {
      background-position: -795px;
    }
  }
  @keyframes -global-wizard_ice_attack {
    from {
      background-position: 0px;
    }
    to {
      background-position: -886px;
    }
  }
  .wizard_ice {
    bottom: 35px;
  }
  .wizard_fire {
    bottom: 32px;
  }
  .wizard_purple {
    bottom: 32px;
  }

  .wizard_purple_appearing {
    background: url("/img/sprites/wizard_purple/appearing.png") no-repeat;
  }
  .wizard_purple_idle {
    background: url("/img/sprites/wizard_purple/idle.png") no-repeat;
  }
  .wizard_purple_attack {
    background: url("/img/sprites/wizard_purple/attack.png") no-repeat;
  }

  .wizard_fire_appearing {
    background: url("/img/sprites/wizard_fire/appearing.png") no-repeat;
  }
  .wizard_fire_idle {
    background: url("/img/sprites/wizard_fire/idle.png") no-repeat;
  }
  .wizard_fire_attack {
    background: url("/img/sprites/wizard_fire/attack.png") no-repeat;
  }

  .wizard_ice_appearing {
    background: url("/img/sprites/wizard_ice/appearing.png") no-repeat;
  }
  .wizard_ice_idle {
    background: url("/img/sprites/wizard_ice/idle.png") no-repeat;
  }
  .wizard_ice_attack {
    background: url("/img/sprites/wizard_ice/attack.png") no-repeat;
  }
</style>
