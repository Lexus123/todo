import { FC } from 'react';
import FadeIn from 'react-fade-in';
import { Todo } from '../../models/todo';
import TodoListItem from './TodoListItem';

const TodoList: FC<{ todos: Todo[] }> = (props) => {
	return (
		<div className="bg-white dark:bg-gray-800 shadow dark:shadow-md overflow-hidden rounded-lg">
			<ul className="divide-y divide-gray-200 dark:divide-gray-700">
				<FadeIn transitionDuration={400} delay={250}>
					{props.todos.map((todo) =>
						<TodoListItem todo={todo} key={todo.id} />
					)}
				</FadeIn>
			</ul>
		</div>
	);
};

export default TodoList;