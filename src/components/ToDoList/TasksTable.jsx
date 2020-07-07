import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const TasksTable = ({ deleteMessage, tasks }) => {
    return (
        <div>
            <Table id="tasksTable" variant="dark">
                <tr><th>Message</th></tr>
                {tasks.map((task, index) => {
                    //console.log(task);
                    const { message } = JSON.parse(task);

                    return <tr>
                        <td className="td">{message}</td>
                        <span class="glyphicon glyphicon-remove" onClick={deleteMessage}><span class="hidden">{index}</span></span>
                    </tr>
                })}
            </Table>
        </div>
    );
}


TasksTable.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default TasksTable;
