
 //storing a todo
var todos = ["item 1" , "item 2" , "item 3"]
// displaying a todo 
console.log('My Todos: ' , todos);

//adding a todo
todos.push("item 4");
console.log(todos)

//adding a todo
todos.push("item 5");
console.log(todos)

//changing a todo 
todos[0] = "item1 updated"
console.log(todos)

//deleting a todo
todos.splice(0,1)
console.log(todos)