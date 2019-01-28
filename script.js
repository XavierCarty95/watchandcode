var todoList = {
	todos: [],
	
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	
	},
	changeTodo: function(position, todoText) {
		// this.todos[position] = newValue;
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
	
	},
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
	
	},
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;

		// Get number of completed todos.
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}
		// Case 1: If everything's true, make everything false
		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		}
		else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		
	}
};

var handlers = {
	addTodo: function() {
		var addTodoTextInput = document.getElementById("addTodoTextInput");
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = "";
		view.displayTodos()
	},
	changeTodo: function() {
		var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
		var changeTodoTextInput = document.getElementById("changeTodoTextInput");
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = "";
		changeTodoTextInput.value = "";
			view.displayTodos()
	},
	deleteTodo: function(position) {
		
		todoList.deleteTodo(position);
			view.displayTodos()
	},
	toggleCompleted: function() {
		var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = "";
			view.displayTodos()
	},
		toggleAll: function() {
		todoList.toggleAll();
			view.displayTodos()
	}
};
var view = {
	displayTodos: function() {
		var todosUl = document.querySelector("ul");
		todosUl.innerHTML = "";
	for (var i = 0; i <todoList.todos.length; i++) {
		
		var todoLi = document.createElement("li");
		var todo = todoList.todos[i];
		var todoTextWithCompletion = '';
		if(todo.completed === true) {
			todoTextWithCompletion = '(x)' + todo.todoText; 
			
		} else {
				todoTextWithCompletion = '()' + todo.todoText; 
			
		}
		todoLi = i; 
		todoLi.textContent = todoTextWithCompletion
		todoLi.appendChild(this.createDeleteButton())
		todosUl.appendChild(todoLi);	
		}
	},
	
	createDeleteButton : function() {
		var deleteButton = document.createElement("button");
		deleteButton.textContent ="Delete"; 
		deleteButton.className = 'deleteButton'
		return deleteButton
	},
	setUpEventListeners : function() {var todosUL = document.querySelector('ul');
todosUL.addEventListener('click' , function () {
	console.log(event.target.parentNode.id);
	// get the item that was clicked 
	var elementClicked = event.target;
	
	if (elementClicked.className === 'deleteButton') {
		//Run handlers.deleteTodo(position)
		handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
	}
	
})

		
	}
};

view.setUpEventListeners()




