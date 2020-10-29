import React, { Component } from 'react';
import './App.css';
import QuoteCard from './Components/QuoteCard'
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { simpson : [] };
    this.handleClick = this.handleClick.bind(this)
  }
componentDidMount() {
  this.getSimpson()
}

  getSimpson() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(res => this.setState({simpson : res.data}))
      
    }
  
    handleClick() {
      return this.getSimpson()
    }
  render() {
    
    
    return (
      <div>
        {this.state.simpson.map( e => <QuoteCard {...e} />)}
        <button className="clicker" onClick={this.handleClick}>CLICK TO GET QUOTE!</button>
      </div>
    );
  }
}


export default App;
