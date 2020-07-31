import React from "react";


export default function Film(props) {
    const {name, number, text} = props;
    return(
        <div style={{border: "1px solid red", margin: 20}}>
            название:{name}
            номером:{number}
            текстом:{text}
        </div>
    )

}