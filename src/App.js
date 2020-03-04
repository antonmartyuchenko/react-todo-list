import React from 'react';
import './style.css';

class Counter extends React.Component {

  render() {
    
    const count = this.props.count;

    return (
        <span className="counter">count {count}</span>
    );

  }
}

class Button extends React.Component{

  render() {
    return (
      <button onClick={this.props.onClick}>Add +1</button>
    )
  }

}

class App extends React.Component {

  state = {
    count: 0
  }

  up = () => { 
    this.setState({count: this.state.count + 1});
  }

  render() {
    
    const count = this.state.count;

    return (
      <>
        <Counter count={count}/>
        <Button onClick={this.up}/>
      </>
    );

  }
}

export default App;
