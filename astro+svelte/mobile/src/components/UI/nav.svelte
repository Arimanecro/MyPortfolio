<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
  import { ContextSettings } from "../../stores/settings-context.js";

  /**
   * @type {Array<string[]>}
   */
  var sections = [
    ["skills", "img/axes.png", "Skills"],
    ["stack", "img/crown.png", "Github repos"],
    ["contacts", "img/helmet.png", "Contacts"],
  ];

  /**
   *
   * @param {string} category
   * @returns {import("../../stores/settings-context.js").infoSettings}
   */
  var close = (category) =>
    ContextSettings.update(() => ({ category, go: false, close: false }));
</script>

{#each sections as [category, icon, title]}
  <div class="menu" on:click={() => close(category)}>
    <div class="icon" style:background={`url(${icon}) center no-repeat`} />
    <span>{title}</span>
  </div>
{/each}

<style>
  .menu {
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    color: #02fba6;
    font-family: "KreepTown";
    font-size: 34px;
    text-align: center;
    margin-top: 3px;
    background-color: black;
    opacity: 0.75;
  }
  .menu span {
    margin: 0 auto;
  }
  .icon {
    width: 44px;
    height: 44px;
    border: #05749e 2px solid;
    border-radius: 50%;
    background-position: center;
  }
</style>
