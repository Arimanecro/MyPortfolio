import React, { ReactElement } from "react";

export const Hands = React.memo((): ReactElement => {
  return (
    <>
      <div className="hand_one"></div>
      <div className="hand_one" id="hand_two"></div>
    </>
  );
});