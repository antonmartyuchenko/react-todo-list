import React from 'react';
import './style.css';

class App extends React.Component {

  /*constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }*/

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
        <span className="counter">count {count}</span>
        <button onClick={this.up}>Add +1</button>
      </>
    );

  }
}

export default App;
