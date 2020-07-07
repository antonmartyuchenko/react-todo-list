import React from 'react';
import axios from 'axios';
import TasksTable from './TasksTable';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

class ToDoList extends React.PureComponent {

  state = {
    inputTaskValue: '',
    tasks: []
  }

  componentDidMount() {
    this.setState({ tasks: [{id: 1, message: 'test'}] }); 
    /*axios.get(`http://127.0.0.1:3001/api/tasks`).then(res => {
    console.log(res.data);  
    this.setState({ tasks: res.data });
    })*/
  }

  setTaskValue = e => {
    this.setState({ inputTaskValue: e.target.value });
  }

  addTask = () => {
    const { inputTaskValue } = this.state;

    if (inputTaskValue !== '') {
      

      axios.post(`http://127.0.0.1:3001/api/tasks`, { message: inputTaskValue }).then(res => {
        this.setState({ tasks: [...this.state.tasks, res.data] });
      })

      this.setState({ inputTaskValue: '' });
    }
  }

  deleteMessage = e => {
    console.log(e);
  }

  render() {
    return (
      <div id="div">
        <InputGroup onChange={this.setTaskValue} value={this.state.inputTaskValue}>
          <FormControl
            placeholder="Message"
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={this.addTask}>Add task</Button>
          </InputGroup.Append>
        </InputGroup>
        <TasksTable deleteMessage={this.deleteMessage} tasks={this.state.tasks} />
      </div>
    );
  }
}

export default ToDoList;
