<script>
  import { onMount } from "svelte";

  /**
   * @type {number}
   */
  var count1;
  /**
   * @type {number}
   */
  var count2;
  /**
   * @type {HTMLElement}
   */
  var first;

  onMount(() => {
    var interval = setInterval(() => {
      if (!first) {
        first = document.getElementById("first");
        count1 = checkMargin();
        count2 = checkMargin2();
      } else {
        clearInterval(interval);
      }
    }, 1000);
  });

  /**
   * @returns {number}
   */
  var checkMargin = () => {
    let margin = localStorage?.first?.slice(0, -2);

    return margin
      ? document.getElementById("wrappListStack")?.children?.length -
          6 -
          Math.abs(margin / 50)
      : document.getElementById("wrappListStack")?.children.length - 6;
  };

  /**
   * @returns {number}
   */
  var checkMargin2 = () => {
    let margin = localStorage?.first?.slice(0, -2);
    return margin ? Math.abs(margin / 50) : 0;
  };

  /**
   * @returns {Storage}
   */
  var up = () => {
    if (count1) {
      if (count1 >= 6) {
        count1 -= 6;
        count2 += 6;
        first.style.marginTop =
          String(Number(first?.style.marginTop.slice(0, -2)) + Number("-300")) +
          "px";
        localStorage.first = first.style.marginTop;
      } else {
        first.style.marginTop =
          String(
            Number(first.style.marginTop.slice(0, -2)) +
              Number(-`${count1 * 50}`)
          ) + "px";
        localStorage.first = first.style.marginTop;
        count2 += count1;
        count1 = 0;
      }
    }
  };

  /**
   * @returns {Storage}
   */
  var down = () => {
    if (count2) {
      if (count2 >= 6) {
        count1 += 6;
        count2 -= 6;
        first.style.marginTop =
          String(Number(first.style.marginTop.slice(0, -2)) + Number("300")) +
          "px";
        localStorage.first = first.style.marginTop;
      } else {
        first.style.marginTop =
          String(
            Number(first.style.marginTop.slice(0, -2)) +
              Number(`${count2 * 50}`)
          ) + "px";
        localStorage.first = first.style.marginTop;
        count1 += count2;
        count2 = 0;
      }
    }
  };
</script>

<div id="wrappBtns">
  <button on:click={up} id="up" />
  <button on:click={down} id="down" />
</div>

<style>
  #wrappBtns {
    width: 80px;
    height: 24px;
    margin: 0 auto;
    position: relative;
  }
  #up {
    width: 24px;
    height: 24px;
    float: left;
    padding: 0px;
    border: none;
    background: url("/img/up_scroll3.png");
    background-size: contain;
    outline: none;
    position: absolute;
    z-index: 7;
    transform: rotate(-90deg);
    cursor: pointer;
  }
  #down {
    width: 24px;
    height: 24px;
    float: right;
    padding: 0px;
    border: none;
    background: url("/img/down_scroll.png");
    background-size: contain;
    outline: none;
    transform: rotate(90deg);
    z-index: 7;
    cursor: pointer;
  }
</style>
