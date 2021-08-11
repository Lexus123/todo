import Todo from './Todo';

const Todos = (props) => {
	return (
		<div className="bg-white dark:bg-gray-800 shadow dark:shadow-md overflow-hidden rounded-lg">
			<ul className="divide-y divide-gray-200 dark:divide-gray-700">
				{props.todos.map((todo) =>
					<Todo todo={todo} key={todo.id} />
				)}
			</ul>
		</div>
	);
};

export default Todos;