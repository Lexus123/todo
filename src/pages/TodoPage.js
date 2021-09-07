import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import Card from '../components/ui/Card';
import { getDateTime, getTimePassed } from '../utils/dates';

const TodoPage = () => {
	const params = useParams();

	const todos = useSelector(state => state.todos.todos);
	const todo = todos.find(todo => todo.id.toString() === params.todoId);

	const createdDate = new Date(todo.createdAt);
	const dateTime = getDateTime(createdDate, false);
	const timePassed = getTimePassed(createdDate);

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

	return (
		<Card padding={false} flex={false}>
			<div className="px-4 py-5 sm:px-6">
				<h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{todo.text}</h3>
				<p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
					<FormattedMessage
						id="pages.todopage.description"
						description="The subtitle of the todo"
						defaultMessage="A little bit of information about the todo."
					/>
				</p>
			</div>
			<div className="border-t border-gray-200 dark:border-gray-600 px-4 py-5 sm:p-0">
				<dl className="sm:divide-y sm:divide-gray-200 dark:divide-gray-600">
					<div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
							<FormattedMessage
								id="pages.todopage.added"
								description="The title of this piece of info"
								defaultMessage="Added on"
							/>
						</dt>
						<dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
							<time dateTime={todo.createdAt}>{dateTime}</time>
						</dd>
					</div>
					<div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
							<FormattedMessage
								id="pages.todopage.timepassed.title"
								description="The title of this piece of info"
								defaultMessage="Time passed"
							/>
						</dt>
						<dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">{timePassed} <FormattedMessage
							id="pages.todopage.timepassed.minutes"
							description="The info of this piece of info"
							defaultMessage="Minutes"
						/></dd>
					</div>
				</dl>
			</div>
		</Card>
	);
};

export default TodoPage;