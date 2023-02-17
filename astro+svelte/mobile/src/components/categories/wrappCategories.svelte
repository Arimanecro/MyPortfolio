<script>
  import { ContextSettings } from "../../stores/settings-context.js";
  import BtnClose from "../UI/btnClose.svelte";
  export var category;
</script>

<div
  class="panel"
  style:margin-left={$ContextSettings.category !== category ? "-100vw" : "0vw"}
>
  <BtnClose category />
  <slot />
</div>
