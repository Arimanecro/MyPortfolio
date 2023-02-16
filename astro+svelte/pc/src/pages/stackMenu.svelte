<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
  import { ContextSettings } from "../stores/wizard-context.js";
  import BtnAnimation from "./UI/btnAnimation.svelte";

  /**
   * @type {number}
   */
  $: loading = 0;
  /**
   * @type {number}
   */
  $: error = 0;
  /**
   * @type {string[]}
   */
  $: repos = [,];
  /**
   *
   * @param {HTMLElement} e
   */
  var onClick = (e) => {
    var { url, stack } = e.currentTarget.dataset;
    if (!$ContextSettings.animation && !$ContextSettings.turnOffAnimation) {
      ContextSettings.update((cxtsettings) => ({
        ...cxtsettings,
        animation: true,
        wizardStatus: "attack",
        openPortal: true,
        appearingPortal: !cxtsettings.appearingPortal
          ? 1
          : cxtsettings.appearingPortal,
        link: url,
        getLinks: false,
        stack: stack.split(","),
      }));
    }
    if ($ContextSettings.turnOffAnimation) {
      ContextSettings.update((cxtsettings) => ({
        ...cxtsettings,
        animation: true,
        link: url,
        getLinks: false,
        bounceInUp: false,
      }));
    }
  };

  $: if (repos.length > 1) {
  fetch("https://api.github.com/users/Arimanecro/repos")
    .then((response) => response.json())
    .then((data) => {
      data
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .reverse()
        .forEach((v) => {
          !v.name.endsWith(".io") ? repos.push(v) : undefined;
        });
      repos = repos;
      loading = 1;
    })
    .catch((error) => console.error(error));
  }
</script>

<div id="stacks">
  <BtnAnimation />
  <h1>Github repos:</h1>
  <div id="wrappListStack">
    {#if error === 0}
      {#if !loading}
        <span class="loader" />
      {:else}
        {#each repos as repo, key }
        {#if key}
            <div
              class="wrapperStack"
              style={key === 1 ? "margin-top: 0px;" : null}
              id={key === 1 ? "first" : null}
              data-stack={`${repo.topics.toString()}`}
              data-url={repo.html_url}
              on:click={onClick}
            >
              <span
                style={key === 1 ? "margin-right: 6px" : "margin-right: 0px"}
                >{key}.</span
              >
              <div class="stack">
                {#each repo.topics as r}
                  <div class={`icon icon_${r}`} />
                {/each}
              </div>
            </div>
          {/if}{/each}
      {/if}
    {:else}
      <p>Error!</p>
    {/if}
  </div>
</div>

<style>
  #stacks {
    width: 262px;
    height: 448px;
    text-align: center;
    background: rgba(160, 196, 77, 0.51);
    position: absolute;
    right: 0;
  }
  #stacks h1 {
    font-family: "KreepTown";
    font-size: 24px;
    text-transform: capitalize;
    letter-spacing: 3px;
    clear: both;
    margin-top: 41px;
    margin-bottom: 2px;
  }

  #wrappListStack {
    width: 262px;
    height: 290px;
    overflow: hidden;
  }
  .wrapperStack {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding-left: 2px;
    margin-bottom: 12px;
    transition: all ease 0.35s;
    cursor: pointer;
  }
  .wrapperStack:first-child {
    margin-right: 6px;
  }
  .wrapperStack span {
    font-family: "KreepTown";
    font-size: 24px;
    font-weight: bold;
    text-transform: capitalize;
  }
  .loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: block;
    position: absolute;
    margin: 0 auto;
    top: 40%;
    left: 39%;
    background: linear-gradient(0deg, rgba(255, 61, 0, 0.2) 33%, #ff3d00 100%);
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  .loader::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #263238;
  }
  .stack {
    display: flex;
    align-items: center;
    width: 245px;
    height: 38px;
    padding-left: 4px;
    margin-right: 2px;
    margin-left: 3px;
    background-color: rgba(23, 24, 24, 0.67);
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
