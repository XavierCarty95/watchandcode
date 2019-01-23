var todoList = {
  todo : [],

 displayTodos : function() {
   console.log('My Todos , this.todos')
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