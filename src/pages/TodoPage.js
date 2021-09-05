import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import Card from '../components/ui/Card';

const TodoPage = () => {
	const todos = useSelector(state => state.todos.todos);

	const params = useParams();

	const todo = todos.find(todo => todo.id.toString() === params.todoId);

	if (!todo) {
		return (
			<Card padding={true} flex={false}>
				<p className="text-gray-900 dark:text-white">
					<FormattedMessage
						id="pages.todopage.notfound"
						description="This tells the user the todo was not found"
						defaultMessage="No todo found for ID {todoId}"
						values={{
							todoId: params.todoId
						}}
					/>
				</p>
			</Card>
		);
	}

	// const createdAtDate = new Date(0);
	// createdAtDate.setUTCSeconds(todo.createdAt / 1000).toLocaleString();
	// const cDate = createdAtDate.toLocaleString();

	// const nowDate = Date.now();
	// const elapsed = nowDate - todo.createdAt;
	// var hoursElapsed = Math.floor(elapsed / 1000 / 3600);

	return (
		<Card padding={true} flex={false}>
			<h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{todo.text}</h3>
		</Card>
	);
};

export default TodoPage;