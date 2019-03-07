import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

class DogeMeme extends React.Component {
	render(){
		return(
			<div className='dog'>
				<h1>EASY PEASY</h1>
				<h1>KEMON SQUEEZY</h1>
			</div>
		)
	}
}

ReactDOM.render(
	<DogeMeme />,
	document.getElementById('root')
)