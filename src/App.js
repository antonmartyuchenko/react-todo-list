import React from 'react';
import CountNotification from "./components/CountNotification";
import AddButton from "./components/AddButton";
import Counter from "./components/Counter";
import './style.css';

class App extends React.PureComponent {

  render() {
  
    return (
        <Counter 
          CountNotification={CountNotification} 
          AddButton={AddButton} />
    );

  }

}

export default App;
