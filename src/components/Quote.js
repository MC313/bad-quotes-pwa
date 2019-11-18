import React from "react";

const style = {
    width: "60%",
    maxWidth: "550px",
    margin: "0px auto",
    border: "2px solid",
    alignSelf: "center"
};



const Quote = ({author, quote}) => (
    <div style={style}>
        <p>{quote}</p>
        <p>- {author}</p>
    </div>
);


export default Quote;
