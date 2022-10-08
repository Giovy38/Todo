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

    if(todoInput.value !== ""){
        // prendiamo il valore dall'inputbox
        let taskValue = todoInput.value;
        // creiamo li
       const li = document.createElement('li');
       li.className = 'my-todo';
       li.appendChild(document.createTextNode(taskValue));
        // creiamo a
        const link = document.createElement('a');
        link.className = 'todo-remove';
        link.innerHTML = '<h3>X</h3>';
        // passiamo la a all' li 
        li.appendChild(link);

        // prendiamo l'ul
        const todoList = document.getElementById('todo-list');
        todoList.appendChild(li);

        todoInput.value = '';
    }

    
}

// button remove
    const removeButton = document.getElementById('remove-button');

    removeButton.addEventListener('click', remClick);

    function remClick(){
        const taskRemove = document.getElementsByClassName('my-todo');

        const taskRemoveArray = Array.from(taskRemove);
        
        for (let index = 0; index < taskRemoveArray.length; index++) {
            taskRemoveArray[index].remove();
        }
    }

