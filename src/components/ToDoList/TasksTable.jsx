import React from 'react';
import PropTypes from 'prop-types';

const TasksTable = ({tasks}) => {

    return (
        <div>
            <table id="tasksTable">
                {tasks.map(task => <tr><td className="td">{task}</td></tr>)}
            </table>
        </div>
    );

}

TasksTable.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default TasksTable;
