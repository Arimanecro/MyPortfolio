<!-- svelte-ignore a11y-missing-content -->
<script>
  import { ContextSettings } from "../../stores/wizard-context.js";
</script>

{#if $ContextSettings.turnOffAnimation}
  {#if $ContextSettings.getLinks === false && $ContextSettings.bounceInUp === true}
    <a
      href={$ContextSettings.link}
      target="_blank"
      id="github"
      rel="noreferrer"
      style={`animation: bounceInUp_link .73s ease forwards, pulse_animation 1.25s .75s linear infinite `}
    />
  {:else if $ContextSettings.getLinks === false && $ContextSettings.bounceInUp === false}
    {ContextSettings.update((settings) => ({ ...settings, bounceInUp: true }))}
  {/if}
{:else if $ContextSettings.getLinks}
  <a
    href={$ContextSettings.link}
    target="_blank"
    id="github"
    rel="noreferrer"
    style={`animation: bounceInUp_link .73s ease forwards, pulse_animation 1.25s .75s linear infinite`}
  />
{/if}

<style>
  #github {
    width: 48px;
    height: 48px;
    background: url(/img/github.png) no-repeat;
    position: absolute;
    right: 332px;
    bottom: 32px;
  }
  @keyframes -global-bounceInUp {
    100% {
      transform: rotate(360deg);
      bottom: 240px;
    }
  }
  @keyframes -global-bounceInUp_link {
    100% {
      transform: rotate(360deg);
      bottom: 180px;
    }
  }
  @keyframes -global-pulse_animation {
    0% {
      transform: scale(1);
    }
    30% {
      transform: scale(1);
    }
    40% {
      transform: scale(1.18);
    }
    50% {
      transform: scale(1.28);
    }
    60% {
      transform: scale(1.18);
    }
    70% {
      transform: scale(1.05);
    }
    80% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
