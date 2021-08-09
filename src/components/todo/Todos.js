import Todo from './Todo';

const Todos = (props) => {
	return (
		<div className="bg-white shadow overflow-hidden rounded-lg">
			<ul className="divide-y divide-gray-200">
				{props.todos.map((todo) =>
					<Todo todo={todo} key={todo.id} />
				)}
			</ul>
		</div>
	);
};

export default Todos;