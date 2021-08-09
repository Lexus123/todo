import { Fragment, useEffect, useState } from "react";

const Form = (props) => {
	// Setup state management
	const [todoText, setTodoText] = useState("");
	const [isEmpty, setIsEmpty] = useState(true);

	// Only check if input field is empty when todoText changes
	useEffect(() => {
		setIsEmpty(todoText.trim().length < 1);
	}, [todoText]);

	// onChangeTodo fires when the user types
	const onChangeTodo = (event) => {
		setTodoText(event.target.value);
	};

	// onSubmitHandler fires when the user submits a form
	const onSubmitHandler = (event) => {
		event.preventDefault();

		// Get the current timestamp
		const createdAt = Date.now();

		// Create the todo object
		const todo = {
			createdAt: createdAt,
			id: createdAt,
			text: todoText,
		};

		// Add it to the list
		props.addTodo(todo);

		// Reset the input field to empty
		setTodoText("");
	}

	return (
		<Fragment>
			<h3 className="text-lg leading-6 font-medium text-gray-900">Add another todo</h3>
			<div className="mt-2 max-w-xl text-sm text-gray-500">
				<p>Just when you thought your todo list couldn't get any longer, you came up with something else!</p>
			</div>
			<form className="mt-5 sm:flex sm:items-center" onSubmit={onSubmitHandler}>
				<div className="w-full sm:max-w-xs">
					<label htmlFor="todo" className="sr-only">
						Todo
					</label>
					<input
						type="text"
						name="todo"
						id="todo"
						className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
						placeholder="Get delicious food"
						autoComplete="none"
						onChange={onChangeTodo}
						value={todoText}
					/>
				</div>
				<button
					type="submit"
					disabled={isEmpty}
					className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
				>
					Add todo
				</button>
			</form>
		</Fragment>

	)
}

export default Form;