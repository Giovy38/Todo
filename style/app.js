// text of the inputbox 
//prendiamo l'inputbox
const todoInput = document.getElementById('todo-input');
//prendiamo l'ul
const todoList = document.getElementById('todo-list');

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
       li.classList.add('start-animation');
       li.appendChild(document.createTextNode(taskValue));
        // creiamo a
        const link = document.createElement('a');
        link.className = 'todo-remove';
        link.innerHTML = '<h3>X</h3>';
        // passiamo la a all' li 
        li.appendChild(link);

        // inseriamo li nell'ul
        
        // todoList.appendChild(li);
        todoList.insertBefore(li,todoList.firstChild);

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

//remove single task 

todoList.addEventListener('click', removeSingleTask);

function removeSingleTask(e){
    if(e.target.parentElement.classList.contains('todo-remove')){

        e.target.parentElement.parentElement.classList.add('removing-effect');

        setTimeout(function(){
            e.target.parentElement.parentElement.remove();
        }, 2500);
        
    }
} 

// sign the done task 

todoList.addEventListener('click', signDoneTask);
let dashed = false;

function signDoneTask(e){
    if(e.target.classList.contains('my-todo')){
        const signLi = e.target;
        if(dashed === false){
            signLi.style.textDecoration = "line-through";
            signLi.style.color = "#e46a57";
            dashed = true;
            signLi.classList.add('done-task-bg');
            signLi.classList.remove('start-animation');


        } else {
            signLi.style.textDecoration = "none";
            signLi.style.color = "black";
            dashed = false;
            signLi.classList.remove('done-task-bg');
        }
    }
}

// change color

const colorPicker = document.getElementById('color-picker-button');

colorPicker.addEventListener('blur', colorChange);

function colorChange(){
    const headerElement = document.querySelector('.todo-insert-container');
    headerElement.style.background = colorPicker.value ;
}