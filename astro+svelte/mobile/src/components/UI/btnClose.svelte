<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
  import { ContextSettings } from "../../stores/settings-context.js";

  export let category;
  /**
   *
   * @param {string} category
   * @returns {import("../../stores/settings-context.js").infoSettings}
   */
  var close = () =>
    ContextSettings.update((settings) => ({
      ...settings,
      go: true,
      close: false,
      category,
    }));
</script>

<div class="btn_close" on:click={close} />

<style>
  .btn_close {
    width: 40px;
    height: 40px;
    background: url("/img/btnclose.png") no-repeat;
    background-size: contain;
    position: absolute;
    z-index: 5;
    top: 0px;
    right: 0px;
  }
</style>
