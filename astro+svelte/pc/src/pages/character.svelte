<!-- svelte-ignore unused-export-let -->
<script>
    import { ContextSettings } from "../stores/wizard-context.js";
    
    export let delay, ms, jump, rotate, sizeReduction, reduction, appearingPortal, k, icon, id;
    if (k !== 0) {
      ms = ms * k;
        (delay += ms).toPrecision(3);
        (jump += ms).toPrecision(2);
        (rotate += ms).toPrecision(2);
        (sizeReduction += ms).toPrecision(2);
        (reduction += ms).toPrecision(2);
      }
</script>

<div
     class="character"
     id={id}
     style={
       `animation: golem 0.55s linear ${delay}s forwards,
                ${id}Running 0.35s steps(12) infinite,
                golemMove 2s linear ${delay}s forwards,
                golemJump 0.55s ease-in-out ${jump}s forwards,
                golemRotate 0.55s linear ${rotate}s forwards,
                sizeReduction 0.95s linear ${sizeReduction}s forwards,
                reduction 1.25s linear ${reduction}s forwards`
     }
     on:animationend={e => {
       if (k == $ContextSettings.stack.length - 1 && e.animationName == "reduction") {
        ContextSettings.update( (settings) => ({
           ...settings,
           animation: false,
           wizardStatus: "idle",
           openPortal: true,
           appearingPortal: 2,
           getLinks: true
         }));
       }
     }}>
     <div class={`sign icon_${icon}`}
       style={`animation: rotateSign 0.15s ease ${rotate}s forwards` }></div>
   </div>
<style>
  .character {
  width: 58px;
  height: 113px;
  transform: scale(0);
  transform-origin: 100px 100px;
  will-change: transform;
  position: absolute;
  z-index: 1;
  left: 270px;
  bottom: 80px;
  transition: all ease;
}
#golemIce {
  background: url("/img/sprites/golem_ice_running.png") no-repeat;
  background-position-y: 30px;
}
#golemSwamp {
  background: url("/img/sprites/golem_swamp_running.png") no-repeat;
  background-position-y: 30px;
}
#golemLava {
  background: url("/img/sprites/golem_lava_running.png") no-repeat;
  background-position-y: 30px;
}
#goblin {
  background: url("/img/sprites/goblin_running.png") no-repeat;
  background-position-y: 30px;
}
#orc {
  background: url("/img/sprites/orc_running.png") no-repeat;
  background-position-y: 30px;
}
#troll {
  background: url("/img/sprites/troll_running.png") no-repeat;
  background-position-y: 30px;
}
#fallenAngel {
  background: url("/img/sprites/fallenangel_one_running.png") no-repeat;
  background-position-y: 30px;
}
#reaper {
  width: 65px;
  background: url("/img/sprites/reaper_running.png") no-repeat;
  background-position-y: 30px;
}
.sign {
  width: 29px;
  height: 29px;
  margin: 0 auto;
  position: relative;
}
@keyframes -global-golem {
  0.0000% {
    transform: scale(0) translate(-11px, -27px);
  }
  12.3352% {
    transform: scale(1) translate(8.9px, -27.6px);
  }
  29.5695% {
    transform: translate(36.6px, -24.5px);
  }
  37.4956% {
    transform: translate(48.9px, -20.8px);
  }
  50.5531% {
    transform: translate(67.2px, -10.5px);
  }
  61.5833% {
    transform: translate(79.6px, 2.3px);
  }
  80.6920% {
    transform: translate(96.9px, 27.9px);
  }
  89.1015% {
    transform: translate(107px, 36.9px);
  }
  93.5344% {
    transform: translate(113.6px, 39.7px);
  }
  100.0000% {
    transform: translate(124px, 41px);
  }
}
@keyframes -global-golemIceRunning {
  from {
    background-position-x: 0px;
  }
  to {
    background-position-x: -694px;
  }
}

@keyframes -global-golemSwampRunning {
  from {
    background-position-x: 0px;
  }
  to {
    background-position-x: -682px;
  }
}

@keyframes -global-golemLavaRunning {
  from {
    background-position-x: 0px;
  }
  to {
    background-position-x: -713px;
  }
}
@keyframes -global-goblinRunning {
  from {
    background-position-x: 0px;
  }
  to {
    background-position-x: -713px;
  }
}
@keyframes -global-orcRunning {
  from {
    background-position-x: 0px;
  }
  to {
    background-position-x: -713px;
  }
}
@keyframes -global-trollRunning {
  from {
    background-position-x: 0px;
  }
  to {
    background-position-x: -713px;
  }
}
@keyframes -global-reaperRunning {
  from {
    background-position-x: 0px;
  }
  to {
    background-position-x: -808px;
  }
}
@keyframes -global-fallenAngelRunning {
  from {
    background-position-x: 0px;
  }
  to {
    background-position-x: -713px;
  }
}
@keyframes -global-fallenAngelTwoRunning {
  from {
    background-position-x: 0px;
  }
  to {
    background-position-x: -704px;
  }
}

@keyframes -global-fallenAngelTwo {
  from {
    background-position-x: 0px;
  }
  to {
    background-position-x: -707px;
  }
}

@keyframes -global-golemMove {
  to {
    left: 541px;
  }
}

@keyframes -global-golemJump {
  0.0000% {
    left: 541px;
    bottom: 80px;
  }
  16.2363% {
    left: 587.2px;
    bottom: 116px;
  }
  29.9265% {
    left: 629.2px;
    bottom: 142px;
  }
  44.1312% {
    left: 675.4px;
    bottom: 164px;
  }
  50.8977% {
    left: 698.5px;
    bottom: 172px;
  }
  57.2102% {
    left: 720.7px;
    bottom: 177px;
  }
  62.9763% {
    left: 741.5px;
    bottom: 178.6px;
  }
  68.2330% {
    left: 760.2px;
    bottom: 175.3px;
  }
  73.2381% {
    left: 776.2px;
    bottom: 166.8px;
  }
  75.8154% {
    left: 782.9px;
    bottom: 160.4px;
  }
  79.9939% {
    left: 791.3px;
    bottom: 147.9px;
  }
  83.1248% {
    left: 795.7px;
    bottom: 137.4px;
  }
  90.5526% {
    left: 800.9px;
    bottom: 106.1px;
  }
  100.0000% {
    left: 801px;
    bottom: 40px;
  }
}

@keyframes -global-golemRotate {
  0% {
    transform: rotateY(-180deg);
    bottom: -10px;
  }
  100% {
    transform: rotateY(-180deg);
    bottom: -200px;
  }
}
@keyframes -global-rotateSign {
  100% {
    transform: rotateY(180deg);
  }
}

@keyframes -global-sizeReduction {
  from {
    left: 801px;
    bottom: -200px;
  }
  to {
    left: 605px;
    bottom: -200px;
  }
}
@keyframes -global-reduction {
  from {
    left: 801px;
    bottom: -200px;
    transform: scale(1) rotateY(-180deg);
  }

  to {
    left: 675px;
    bottom: -200px;
    transform: scale(0) rotateY(-180deg);
  }
}
</style>