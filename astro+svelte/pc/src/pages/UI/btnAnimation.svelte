<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
  import { ContextSettings } from "../../stores/wizard-context.js";

  /**
   *  @type {boolean}
   */
  var settings = true;

  /**
   *  @type {string}
   */
  $: bg = settings ? "check" : "uncheck";

</script>

<div
  class={`${bg}`}
  id="checkAnimation"
  on:click={() => {
    settings = !settings;
    ContextSettings.update((cxtsettings) => ({
      ...cxtsettings,
      openPortal: cxtsettings.openPortal ? cxtsettings.openPortal : false,
      wizardStatus: cxtsettings.turnOffAnimation ? "idle" : cxtsettings.wizardStatus,
      turnOffAnimation: !cxtsettings.turnOffAnimation,
      animation: !cxtsettings.animation,
    }));
  }}
>
  ANIMATION
</div>

<style>
  #checkAnimation {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 132px;
    height: 32px;
    font-family: "ZOMBIESSTATION";
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 3px;
    padding-left: 34px;
    position: absolute;
    right: 0;
    cursor: pointer;
  }
  .check {
    background: url("/img/select.png") no-repeat top left;
  }
  .uncheck {
    background: url("/img/unselect.png") no-repeat top left;
  }
</style>
