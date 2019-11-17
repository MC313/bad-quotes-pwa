import React, { useEffect, useState } from "react";

const style = {
    width: "60%",
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
