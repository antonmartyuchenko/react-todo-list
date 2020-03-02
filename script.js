/*document.getElementById('addButton').onclick = function () {

    inputTask = document.getElementById('inputTask');
    tableTasks = document.getElementById('tableTasks');

    if(!inputTask.value) return;
    
    let tr = document.createElement('tr');
    tableTasks.append(tr);

    let td = document.createElement('td');
    td.className = 'td';
    td.textContent = inputTask.value;
    tr.append(td);

    inputTask.value = '';

} */

class InputTask extends React.Component {

    render() {
        return (<input id="inputTask" type="text"/>)
    }

}

ReactDOM.render(<InputTask />, document.getElementById('div'));