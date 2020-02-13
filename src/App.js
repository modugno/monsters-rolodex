import React, { Component } from 'react';
import './App.css';

export class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters && this.state.monsters.map(monster => (
          <div>{monster.name}</div>
        ))}
      </div>
    );
  }
}

export default App;
