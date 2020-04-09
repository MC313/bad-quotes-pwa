import React, { useEffect, useState } from 'react';

import './App.css';

import getQoute from "./services/getQoute";
import InstallPrompt from './components/InstallPrompt';
import Quote from './components/Quote';

const setQuote = (stateFn) => (quoteData) => stateFn(quoteData);

const fetchQuote = (setQuoteFn, setStateFn) => {
	getQoute()
            .then(setQuoteFn(setStateFn))
            .catch((error) => console.error("Error fetching quote ", error));
};

const App = () => {
	const [state, setState] = useState({ author: "", quote: "" });
    
    useEffect(() => {
    	fetchQuote(setQuote, setState);
    }, []);
    
	return (
	<div className="App">
	  <InstallPrompt>
		<Quote author={state.author} quote={state.quote} />
		<button type="button" onClick={() => fetchQuote(setQuote, setState)}>
			Next Quote
		</button>
	  </InstallPrompt>
	</div>
	);
}

export default App;
