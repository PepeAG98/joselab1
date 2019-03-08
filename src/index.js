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
	constructor(props) {
		super(props);
		this.state = {
			input1: '',
			input2: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		const target = event.target;
		const name = target.name;
			this.setState({[name]: event.target.value.toUpperCase()});
		}

	render(){
		return(
			<div className='dog'>
			<input name="input1" type="text" value={this.state.input1} onChange={this.handleChange} />
			<input name="input2" type="text" value={this.state.input2} onChange={this.handleChange} />
				<div className='caja'>
					<h1 className='centrar1'>{this.state.input1}</h1>
					<h1 className='centrar2'>{this.state.input2}</h1>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<DogeMeme />,
	document.getElementById('root')
)