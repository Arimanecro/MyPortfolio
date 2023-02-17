<script context="module">
  // @ts-check
  import { SvelteComponent } from "svelte";
  import Contacts from "./contacts.svelte";
  import Skills from "./skills.svelte";
  import Stack from "./stack.svelte";

  /**
   * @typedef ListOfComponents
   * @type {typeof SvelteComponent[]}
   */

  /** @type {ListOfComponents} */
  var components = [Skills, Contacts, Stack];
</script>

{#each components as component}
  <svelte:component this={component} />
{/each}
