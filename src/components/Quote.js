import React, { useEffect, useState } from "react";
import getQoute from "../services/getQoute";

const style = {
    width: "60%",
    margin: "0px auto",
    border: "2px solid",
    alignSelf: "center"
};

const setQuote = (stateFn) => (quoteData) => stateFn(quoteData);

const Quote = () => {
    const [state, setState] = useState({ author: "", quote: "" });

    useEffect(() => {
        getQoute()
            .then(setQuote(setState))
            .catch((error) => console.error("Error fetching quote ", error));
    }, [])

    return (
        <div style={style}>
            <p>{state.quote}</p>
            <p>- {state.author}</p>
        </div>
    )
};

export default Quote;