import { useDispatch } from 'react-redux';
import { todosActions } from '../../store/todos';
import { notificationsActions } from '../../store/notifications';
import { Fragment, useEffect, useState } from "react";
import { FormattedMessage, useIntl } from 'react-intl';

const Form = () => {
	const dispatch = useDispatch();

	// Setup local state management
	const [todoText, setTodoText] = useState("");
	const [isEmpty, setIsEmpty] = useState(true);

	// Only check if input field is empty when todoText changes
	useEffect(() => {
		setIsEmpty(todoText.trim().length < 1);
	}, [todoText]);

	// onChangeHandler fires when the user types
	const onChangeHandler = (event) => {
		setTodoText(event.target.value);
	};

	// onSubmitHandler fires when the user submits a form
	const onSubmitHandler = (event) => {
		event.preventDefault();

		// Get the current timestamp
		const date = Date.now();

		// Create the todo object
		const todo = {
			completed: false,
			createdAt: date,
			id: date,
			text: todoText
		};

		// Add it to the list
		dispatch(todosActions.addTodo(todo));

		// Show a notification
		dispatch(notificationsActions.setShow(true));

		// Reset the input field to empty
		setTodoText("");
	}

	const placeholder = useIntl().formatMessage({ id: "components.form.placeholder" });

	return (
		<Fragment>
			<h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
				<FormattedMessage
					id="components.form.title"
					description="The title of the form"
					defaultMessage="Add another todo"
				/>
			</h3>
			<div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-300">
				<p>
					<FormattedMessage
						id="components.form.description"
						description="The description of the form"
						defaultMessage="Just when you thought your todo list couldn't get any longer, you came up with something else!"
					/>
				</p>
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
						className="dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 dark:text-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 block w-full sm:text-sm border-gray-300 dark:border-transparent rounded-md"
						placeholder={placeholder}
						autoComplete="none"
						onChange={onChangeHandler}
						value={todoText}
					/>
				</div>
				<button
					type="submit"
					disabled={isEmpty}
					className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-2 md:ml-5 sm:w-auto sm:text-sm disabled:opacity-50 dark:disabled:opacity-60"
				>
					<FormattedMessage
						id="components.form.button"
						description="The text inside the button to add a todo"
						defaultMessage="Add todo"
					/>
				</button>
			</form>
		</Fragment>
	);
}

export default Form;