import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAcmVksv0BP1Pdxh16CXoPGPK4_FBBfsFU';

const App = () => {
	return (
	<div>
		<SearchBar />
	</div>
	);
};

ReactDOM.render(<App />, document.querySelector('.container'));