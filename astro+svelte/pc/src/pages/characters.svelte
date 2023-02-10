<script>
  import { ContextSettings } from "../stores/wizard-context.js";
  import Character from "./character.svelte";

  /**
   * @type {string[]}
   */
  var personages = [
    "golemIce",
    "golemSwamp",
    "golemLava",
    "goblin",
    "troll",
    "orc",
    "fallenAngel",
    "reaper",
  ];
  /**
   * @param {string[]} arr
   * @returns {string[]}
   */
  var shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
  /**
   * @type {object}
   */
  var obj = {};
  /**
   * @type {string[]}
   */
  var golems;

  $: if ($ContextSettings.animation && !$ContextSettings.turnOffAnimation) {
    golems = shuffleArray(personages);
    obj.appearingPortal = $ContextSettings.appearingPortal === 1 ? 2 : 0;
    obj.delay = 0.5 + obj.appearingPortal;
    obj.ms = 0.5;
    obj.jump = 1.4 + obj.appearingPortal + 0.65;
    obj.rotate = 1.85 + obj.appearingPortal + 0.65;
    obj.sizeReduction = 2.4 + obj.appearingPortal + 0.65;
    obj.reduction = 2.45 + obj.appearingPortal + 0.65;
  }
</script>

{#if $ContextSettings.animation && !$ContextSettings.turnOffAnimation}
  {#each $ContextSettings.stack as icon, k}
    <Character id={golems[k]} {...obj} {icon} {k} />
    {#if k === $ContextSettings.stack.length}
      {(obj = {})}
    {/if}
  {/each}
{/if}
