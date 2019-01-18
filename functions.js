// creating a fucntion

var todos = ["item 1" , "item 2" , "item 3"]; 

function displayTodos() { 
    console.log('My todos:' , todos);
    }
    
    displayTodos();
 
// adding todo   
function addTodo() {
    todos.push('new todo');
    displayTodos();

    
};
// customizing functions with parameters
function addTodo(todo) {
    todos.push(todo);
    displayTodos();

    
};

//change todo
addTodo('some stuff')
displayTodos()

function changeTodo(position, newValue) {
    todos[position] = newValue ;
    displayTodos()
}

changeTodo(0 , 'changed again');

//deleting todos
function deleteTodo(position) { 
    todos.splice(position, 1);
    displayTodos()
}

//deleting todos 
deleteTodo(0);