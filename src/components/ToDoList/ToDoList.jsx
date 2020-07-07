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
    axios.get(`http://127.0.0.1:3001/api/tasks`).then(res => {
      this.setState({ tasks: res.data });
    })
  }

  setTaskValue = e => {
    this.setState({ inputTaskValue: e.target.value });
  }

  addTask = () => {
    const { inputTaskValue } = this.state;

    if (inputTaskValue !== '') {
      axios.post(`http://127.0.0.1:3001/api/tasks`, { message: inputTaskValue }).then(res => {
        this.setState({ tasks: [...this.state.tasks, res.data], inputTaskValue: '' });
      })
    }
  }

  deleteMessage = (id) => {
    axios.delete(`http://127.0.0.1:3001/api/tasks/${id}`).then(res => {
      this.setState({ tasks: this.state.tasks.filter(item => item.id !== id) });
    })
  }

  render() {
    return (
      <div id="div">
        <InputGroup>
          <FormControl
            placeholder="Message" onChange={this.setTaskValue} value={this.state.inputTaskValue}
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
