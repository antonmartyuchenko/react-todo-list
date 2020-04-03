import React from 'react';
import TasksTable from './TasksTable';

class ToDoList extends React.PureComponent  {

  state = {
    inputTaskValue: '',
    tasks: []
  }

  setTaskValue = e => { 
    this.setState({inputTaskValue: e.target.value});
  }

  addTask = () => {

    const {inputTaskValue} = this.state;

    if (inputTaskValue !== '') {
      this.setState({tasks: [...this.state.tasks, inputTaskValue]});
    } 
  
    this.state.inputTaskValue = '';

  }

  render() {
   
    return (
      <>
        <input className="inputTask" onChange={this.setTaskValue} value={this.state.inputTaskValue}></input>
        <button className="addButton" onClick={this.addTask}>Add task</button>
        <TasksTable tasks={this.state.tasks}/>
      </>
    );

  }
}

export default ToDoList;
