import React from 'react';
import CountNotification from './../CountNotification';
import AddButton from './../AddButton';

class Counter extends React.PureComponent  {

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
        <CountNotification count={count}/>
        <AddButton onClick={this.up}/>
      </>
    );

  }
}

export default Counter;
