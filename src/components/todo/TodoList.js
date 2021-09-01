import TodoListItem from './TodoListItem';

const TodoList = props => {
	return (
		<div className="bg-white dark:bg-gray-800 shadow dark:shadow-md overflow-hidden rounded-lg">
			<ul className="divide-y divide-gray-200 dark:divide-gray-700">
				{props.todos.map((todo) =>
					<TodoListItem todo={todo} key={todo.id} />
				)}
			</ul>
		</div>
	);
};

export default TodoList;