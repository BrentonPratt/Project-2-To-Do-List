//create array to hold lists
//create a list object that holds the name of the list, the tasks, and properties of the tasks
let nextID = 0;
class Data {
    static saveList(listID, list){
        let listString = JSON.stringify(list);
        localStorage.setItem(listID, listString);
    };
    static getList(listID){
        let list = localStorage.getItem(listID);
        return JSON.parse(list);
    };
    static removeList(listID){
        localStorage.removeItem(listID);
    };
}

let lists = {
    currentList: {
        name: 'Honey Do',
        tasks: [
            {
                text: 'clean bathroom',
                complete: false,
            }
        ]
    }
};

function displayCurrentList() {
    document.getElementById('current-list-name').innerText = lists.currentList.name;

    let tasksString = '';

    for (let i = 0; i < lists.currentList.tasks.length; i++){
        const task = lists.currentList.tasks[i];

        tasksString += `<div><li>${task.text}</li><input type="checkbox" ${task.complete ? 'checked' : ''}></div>`;
    }

    document.getElementById('list-tasks').innerHTML = tasksString;
}

function createNewList(){
    let newList = {
        id: nextID++,
        name: document.getElementById('new-list-input').value,
        tasks: []
    };
    lists [newList.id] = newList;
    lists.currentList = newList;

    displayCurrentList();
}

displayCurrentList();