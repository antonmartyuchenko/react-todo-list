import React from 'react';
import axios from 'axios';
import TasksTable from './TasksTable';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

class ToDoList extends React.PureComponent {

  state = {
    inputEditMessage: '',
    inputTaskValue: '',
    tasks: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:3001/api/tasks`).then(res => {
      this.setState({
        tasks: res.data.map(task => {
          task.editMode = false;
          return task
        })
      });
    })
  }

  handleSetTaskValue = e => {
    this.setState({ inputTaskValue: e.target.value });
  }

  handleSetEditMessage = e => {
    this.setState({ inputEditMessage: e.target.value });
  }

  handleSetEditMode = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (id === task.id) {
          task.editMode = !task.editMode;

          if (task.editMode) {
            this.setState({ inputEditMessage: task.message });
          } else {
            this.setState({ inputEditMessage: '' });
          }
        }

        return task
      })
    });
  }

  handleAddTask = () => {
    const { inputTaskValue } = this.state;

    if (inputTaskValue !== '') {
      axios.post(`http://127.0.0.1:3001/api/tasks`, { message: inputTaskValue }).then(res => {
        res.data.editMode = false;
        this.setState({ tasks: [...this.state.tasks, res.data], inputTaskValue: '' });
      })
    }
  }

  handleEditMessage = (id) => {
    const { inputEditMessage } = this.state;

    if (inputEditMessage !== '') {
      axios.put(`http://127.0.0.1:3001/api/tasks/${id}`, { message: inputEditMessage }).then(res => {
        const { id, message } = res.data;
        
        this.setState({
          tasks: this.state.tasks.map(task => {
            if (id === task.id) {
              task.message = message;
              task.editMode = false;
            }

            return task;
          })
        });
      })
    }
  }

  handleDeleteMessage = (id) => {
    axios.delete(`http://127.0.0.1:3001/api/tasks/${id}`).then(res => {
      this.setState({ tasks: this.state.tasks.filter(item => item.id !== id) });
    })
  }

  render() {
    return (
      <div id="div">
        <InputGroup>
          <FormControl
            placeholder="Message" onChange={this.handleSetTaskValue} value={this.state.inputTaskValue}
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={this.handleAddTask}>Add task</Button>
          </InputGroup.Append>
        </InputGroup>
        <TasksTable onSetEditMessage={this.handleSetEditMessage}
          onSetEditMode={this.handleSetEditMode}
          onEditMessage={this.handleEditMessage}
          onDeleteMessage={this.handleDeleteMessage}
          tasks={this.state.tasks}
          editMessage={this.state.inputEditMessage}
        />
      </div>
    );
  }
}

export default ToDoList;
