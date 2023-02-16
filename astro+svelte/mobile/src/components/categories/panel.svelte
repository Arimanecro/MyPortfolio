<script context="module">
  import { ContextSettings } from "../../stores/settings-context.js";
  import BtnClose from "../UI/btnClose.svelte";
  import Contacts from "./contacts.svelte";
  import Skills from "./skills.svelte";
  import Stack from "./stack.svelte";

  /**
   * @typedef ListOfComponents
   * @type {object}
   * @property {Skills} Skills
   * @property {Contacts} Contacts
   * @property {Stack} Stack
   */

  /** @type {ListOfComponents} */
  var components = {
    Skills,
    Contacts,
    Stack,
  };
</script>

<div
  class="panel"
  style:margin-left={$ContextSettings.go && !$ContextSettings.close
    ? "-100vw"
    : "0vw"}
>
  <BtnClose />
  <svelte:component this={components[$ContextSettings.category]} />
</div>

<style>
  .panel {
    width: 100%;
    min-height: 100vh;
    background-color: rgba(68, 46, 104, 0.75);
    position: absolute;
    transition: all ease 0.55s;
    z-index: 2;
    top: 0px;
    overflow: scroll;
  }
</style>
