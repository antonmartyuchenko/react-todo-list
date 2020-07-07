import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const TasksTable = ({ deleteMessage, tasks }) => {
    return (
        <div>
            <Table id="tasksTable" variant="dark">
                <tbody>
                    <tr><th>Message</th></tr>
                    {tasks.map((task) => {
                        const { id, message } = task;

                        return <tr key={id}>
                            <td className="td">{message}
                                <span className="glyphicon glyphicon-remove" onClick={() => deleteMessage(id)}></span>
                            </td>
                        </tr>
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
