import React, { FunctionComponent, ReactElement } from "react";

export const Cemetery: FunctionComponent<{}> = React.memo((props): ReactElement => {
    return (
        <section className="wrapper">
            <div id="graveyard">
                {props.children}
            </div>
        </section>
    );
});