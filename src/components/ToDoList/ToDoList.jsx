import React from 'react';
import InputTask from './../InputTask';
import AddButton from './../AddButton';
import TasksTable from './../TasksTable';

class ToDoList extends React.PureComponent  {

  state = {
    /*currentTask: "",*/
    tasks: []
  }

  /*setCurrentTask = e => { 
    this.setState({currentTask: this.state.currentTask = e.target.value});
  }*/

  addTask = () => {

    const inputTask = document.getElementById('inputTask');

    if (inputTask.value !== '') {
      this.setState({tasks: [...this.state.tasks, inputTask.value]});
    } 
    
    inputTask.value = '';

  }

  render() {
   
    return (
      <>
        <InputTask/>
        <AddButton onClick={this.addTask}/>
        <TasksTable tasks={this.state.tasks}/>
      </>
    );

  }
}

export default ToDoList;
