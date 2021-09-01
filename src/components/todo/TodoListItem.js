import { CheckCircleIcon, TrashIcon } from '@heroicons/react/outline';
import { CheckIcon } from '@heroicons/react/solid';
import { useHistory } from 'react-router-dom';

const getDateTime = (datetime) => {
	const timeOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		hour12: false,
		minute: '2-digit',
		second: '2-digit'
	};

	return datetime.toLocaleTimeString(undefined, timeOptions);
};

const TodoListItem = (props) => {
	const history = useHistory();

	const dateTime = getDateTime(new Date(props.todo.createdAt));

	const checkmarkClases = props.todo.isCompleted ? "h-6 w-6 text-green-400" : "h-6 w-6 text-gray-300 dark:text-gray-400";

	const viewTodoHandler = () => {
		history.push("/todos/" + props.todo.id);
	};

	return (
		<li className="hover:bg-gray-50 dark:hover:bg-gray-900">
			<div className="p-4">
				<div className="flex items-center" onClick={viewTodoHandler}>
					<div className="flex w-full">
						<div className="flex-shrink-0">
							<CheckCircleIcon className={checkmarkClases} aria-hidden="true" />
						</div>
						<div className="ml-3 w-0 flex-1 pt-0.5">
							<p className="text-sm font-medium text-gray-900 dark:text-gray-100">{props.todo.text}</p>
							<div className="mt-2 flex">
								<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
									<p>
										Added on <time dateTime={props.todo.createdAt}>{dateTime}</time>
									</p>
								</div>
							</div>
						</div>
					</div>
					<span className="relative z-0 inline-flex shadow-sm rounded-md ml-3 sm:w-auto">
						<button
							type="button"
							className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-green-500 bg-green-50 dark:bg-green-500 text-sm font-medium text-green-600 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-600 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 w-full"
						>
							<span className="sr-only">Complete</span>
							<CheckIcon className="h-5 w-5" aria-hidden="true" />
						</button>
						<button
							type="button"
							className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-red-500 bg-red-50 dark:bg-red-500 text-sm font-medium text-red-600 dark:text-red-100 hover:bg-red-200 dark:hover:bg-red-600 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 w-full"
						>
							<span className="sr-only">Delete</span>
							<TrashIcon className="h-5 w-5" aria-hidden="true" />
						</button>
					</span>
				</div>
			</div>
		</li>
	)
}

export default TodoListItem;