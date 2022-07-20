import React from "react";

function Child(props) {
    return (
        <div>
            <h2>Child</h2>
            <p>{props.hears}</p>
        </div>
    );
}

export default Child;