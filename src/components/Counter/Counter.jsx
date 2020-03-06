import React from 'react';

class Counter extends React.PureComponent  {

  state = {
    count: 0
  }

  up = () => { 
    this.setState({count: this.state.count + 1});
  }

  render() {
    
    const count = this.state.count;
    const CountNotification = this.props.CountNotification;
    const AddButton = this.props.AddButton;

    return (
      <>
        <CountNotification count={count}/>
        <AddButton onClick={this.up}/>
      </>
    );

  }
}

export default Counter;
