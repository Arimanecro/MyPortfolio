import React, { ReactElement, useEffect } from "react";

//height child = 38px + 12px = 50
//height parent = 290

function up() {
  if (count1) {
    if (count1 >= 6) {
      count1 -= 6;
      count2 += 6;
      first.style.marginTop =
        String(
          Number(first.style.marginTop.slice(0, -2)) + Number("-300")
        ) + "px";
        localStorage.first = first.style.marginTop;
    } else {
      first.style.marginTop =
        String(
          Number(first.style.marginTop.slice(0, -2)) + Number(-`${count1 * 50}`)
        ) + "px";
      localStorage.first = first.style.marginTop;
      count2 += count1;
      count1 = 0;
    }
  }

}

function down() {
  if (count2) {
    if (count2 >= 6) {
      count1 += 6;
      count2 -= 6;
      first.style.marginTop =
        String(
          Number(first.style.marginTop.slice(0, -2)) + Number("300")
        ) + "px";
        localStorage.first = first.style.marginTop;
    } else {
      first.style.marginTop =
        String(
          Number(first.style.marginTop.slice(0, -2)) + Number(`${count2 * 50}`)
        ) + "px";
      localStorage.first = first.style.marginTop;
      count1 += count2;
      count2 = 0;
    }
  }
}

export const Grass = (): ReactElement => {
  
  const checkMargin = () => {
    let margin = localStorage.first.slice(0, -2);
    return margin ? (document.getElementById("wrappListStack").children.length - 6 - (Math.abs(margin / 50))) : document.getElementById("wrappListStack").children.length - 6 
  }
  const checkMargin2 = () => {
    let margin = localStorage.first.slice(0, -2);
    return margin ? (Math.abs(margin / 50)) : 0;
  }
  useEffect(() => {
    self.count1 = checkMargin();
    self.count2 = checkMargin2();
    self.first = document.getElementById("first");
  });
  return (<div id="grass">
    <div id="scrollBar">
      <div id="wrappBtns">
        <button onClick={() => up()} id="up"></button>
        <button onClick={() => down()} id="down"></button>
      </div>
    </div>
  </div>);
};