<script>
  import { ContextSettings } from "../stores/wizard-context.js";
</script>

{#if $ContextSettings.openPortal}
  <div
    id="portal"
    style={`animation-delay: ${$ContextSettings.appearingPortal === 1 ? "0.5s" : "0s"}`}
  />
{/if}

<style>
  #portal {
  width: 196px;
  height: 198px;
  will-change: transform;
  background: url("/img/portal.png") no-repeat;
  position: absolute;
  left: 190px;
  bottom: 20px;
  transform: scale(0);
  transform-origin: center;
  animation: portal 2s linear forwards infinite, portalAppearing 2s linear;
}
@keyframes portal {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes portalAppearing {
  from {
    transform: scale(0) rotate(0deg);
  }
  to {
    transform: scale(1) rotate(360deg);
  }
}
</style>