<!-- svelte-ignore security-anchor-rel-noreferrer -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<script>
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
  $: repos = [];

  $: if (!repos.length) {
    fetch("https://api.github.com/users/Arimanecro/repos")
      .then((response) => response.json())
      .then((data) => {
        repos = data.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
        loading = 1;
      })
      .catch((error) => console.error(error));
  }
</script>

<div id="stacks">
  <h1>Github repos:</h1>
  <div id="wrappListStack">
    {#if error === 0}
      {#if !loading}
        <span class="loader" />
      {:else}
        {#each repos as repo, key}
          {#if repo.topics.length}
            <div class="wrapperStack">
              <a href={`${repo.html_url}`} target="_blank" class="git">
                <div class="stack">
                  {#each repo.topics as r}
                    <div class={`icon icon_${r}`} />
                  {/each}
                </div>
              </a>
            </div>
          {/if}
        {/each}
      {/if}
    {:else}
      <p>Error!</p>
    {/if}
  </div>
</div>

<style>
  #wrappListStack {
    display: flex;
    justify-content: center;
    flex-direction: column;
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
  .wrapperStack {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding-left: 2px;
    margin-bottom: 12px;
    cursor: pointer;
  }
  .wrapperStack:first-child {
    margin-right: 6px;
  }
  #stacks {
    width: 100vw;
    min-height: 100vh;
    height: auto;
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
    margin-top: 32px;
    margin-bottom: 8px;
  }
  .git {
    width: 95%;
  }
  .stack {
    display: flex;
    align-items: center;
    width: 100%;
    height: 38px;
    position: absolute;
    padding-left: 4px;
    margin-right: 2px;
    background-color: rgba(23, 24, 24, 0.67);
    overflow: hidden;
    position: relative;
  }
  .wrapp_links {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 50%;
    height: inherit;
    margin-left: -52%;
    background: rgba(238, 195, 28, 0.85);
    transition: all 0.75s ease;
  }
  .icon {
    width: 36px;
    height: 30px;
    margin-right: 8px;
  }
  .icon_js {
    background: url(/img/signs/js.jpg) no-repeat;
    background-size: contain;
  }
  .icon_node {
    background: url(/img/signs/node.png) no-repeat;
    background-size: contain;
  }
  .icon_express {
    background: url(/img/signs/express.png) no-repeat;
    background-size: contain;
  }
  .icon_ts {
    background: url(/img/signs/ts.jpg) no-repeat;
    background-size: contain;
  }
  .icon_ionic {
    background: url(/img/signs/ts.jpg) no-repeat;
    background-size: contain;
  }
  .icon_react {
    background: url(/img/signs/react.png) no-repeat;
    background-size: contain;
  }
  .icon_pwa {
    background: url(/img/signs/pwa.png) no-repeat center;
    background-size: contain;
  }
  .icon_php {
    background: url(/img/signs/php.png) no-repeat;
    background-size: contain;
  }
  .icon_mysql {
    background: url(/img/signs/mysql.jpg) no-repeat;
    background-size: contain;
  }
  .icon_mongo {
    background: url(/img/signs/mongo.jpg) no-repeat;
    background-size: contain;
  }
  .icon_firebase {
    background: url(/img/signs/firebase.png) no-repeat;
    background-size: contain;
    margin-right: 0px;
  }
  .icon_graphql {
    background: url(/img/signs/GraphQL.png) no-repeat;
    background-size: contain;
  }
  .icon_electron {
    background: url(/img/signs/electron.png) no-repeat;
    background-size: contain;
  }
  .icon_svelte {
    background: url(/img/signs/svelte.svg) no-repeat;
    background-size: contain;
  }
  .icon_fastify {
    background: url(/img/signs/fastify.png) no-repeat;
    background-size: contain;
  }
  .icon_webassembly {
    background: url(/img/signs/wa.png) no-repeat;
    background-size: contain;
  }
  @keyframes links {
    100% {
      margin-left: -2%;
    }
  }
</style>
