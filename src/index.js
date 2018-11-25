import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Game from './game.js'
import './style.css'

const root = document.createElement('div');
root.setAttribute('id','root');
root.setAttribute('class', 'body');

document.body.append(root);


class App extends Component {
	render() {
		return (
			<div className="body">
        <div className="body game-container">
				  <Game />
        </div>
			</div>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('root'));