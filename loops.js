var todoList = {
  todo : [],

 displayTodos : function() { 
   if(this.todo.length === 0) {
   console.log('Your todo list is empty!'); } 
   else { console.log('My Todos: ');
   for(var i = 0; i < this.todos.length; i++) { 
     if(this.todos[i].todoText === true) {
     console.log('(x)',this.todos[i].todoText);
   } else { 
     console.log('()', this.todos[i].todoText)
   }
}
}

 },

 addTodos : function (todoText) {
   this.todos.push({
     todoText: todoText,
     completed: false
   })
  this.displayTodos();
 },

 changeTodos : function(position , todoText) {
  //  this.todos[postion] = todoText; 
   this.todo[position].todoText = todoText
   this.displayTodos()
 },

 deleteTodos: function(position) {
 this.todos.splice(position, 1);
 this.displayTodos();
 },
 toggleCompleted: function(position){
   var todo = this.todos[position];
   todo.completed = !todo.completed; 
   this.displayTodos();
 }
 };
