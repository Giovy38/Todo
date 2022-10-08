// text of the inputbox 
const todoInput = document.getElementById('todo-input');

todoInput.addEventListener('keypress', function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        addClick();
        todoInput.value = '';
    }
});

function removeText(){
    todoInput.value = ' '
}


// button add
const todoButton = document.getElementById('todo-button');

todoButton.addEventListener('click', addClick);

function addClick(){

    if(todoInput.value !== 'Insert here the task you want to do' && todoInput.value !== ' '){
        // prendiamo il valore dall'inputbox
        let taskValue = todoInput.value;
        // creiamo il checkbox
        let myCheck = document.createElement('input');
        myCheck.className = 'todo-task-item';
        myCheck.type = 'checkbox';
        // creiamo il label
        let myLabel = document.createElement('label');
        myLabel.className = 'todo-task-item'
        myLabel.appendChild(document.createTextNode(taskValue));
        // creiamo l'hgroup
        let myGroup = document.createElement('hgroup');
        //aggiungiamo gli elementi
        document.getElementById('todo-list').appendChild(myGroup);
        myGroup.appendChild(myCheck);
        myGroup.appendChild(myLabel);
    }

    todoInput.value = '';
}

// button remove
    const removeButton = document.getElementById('remove-button');

    removeButton.addEventListener('click', remClick);

    function remClick(){
        const taskRemove = document.getElementsByClassName('todo-task-item');

        const taskRemoveArray = Array.from(taskRemove);
        
        for (let index = 0; index < taskRemoveArray.length; index++) {
            taskRemoveArray[index].remove();
        }
    }

