import React from 'react';


/*function App() {
  return (
    <div>
      <span className="red-text">Коля - еблан</span>
    </div>
  );
}*/

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0
    }
  }


  up() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <span className="counter">{'count ' + this.state.count}</span>
        <button onClick={() => this.up()}>Add +1</button>
      </div>
    );

  }
}

export default App;
