import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';


const TasksTable = ({ onSetEditMessage, onSetEditMode, onEditMessage, onDeleteMessage, tasks, editMessage }) => {
    return (
        <div>
            <Table id="tasksTable" variant="dark">
                <tbody>
                    <tr><th>Message</th></tr>
                    {tasks.map((task) => {
                        const { id, message, editMode } = task;
                        let messageAction;

                        if (editMode) {
                            messageAction = <>
                                <input className="editMessage" type="text" onChange={(e) => onSetEditMessage(e)} value={editMessage}></input>         
                                <span className="glyphicon glyphicon-ok" onClick={() => onEditMessage(id)}></span>
                                <span className="glyphicon glyphicon-remove" onClick={() => onSetEditMode(id)}></span>
                            </>
                        } else {
                            messageAction = <>
                                <span>{message}</span>
                                <span className="glyphicon glyphicon-pencil" onClick={() => onSetEditMode(id)}></span>
                                <span className="glyphicon glyphicon-remove" onClick={() => onDeleteMessage(id)}></span>
                            </>
                        }

                        return <tr key={id}><td className="td">{messageAction}</td></tr>
                    })}
                </tbody>
            </Table>
        </div>
    );
}


TasksTable.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default TasksTable;
