import { CheckCircleIcon, TrashIcon } from '@heroicons/react/outline';
import { CheckIcon } from '@heroicons/react/solid';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Todo } from '../../models/todo';
import { todosActions } from '../../store/todos';
import { getDateTime } from '../../utils/dates';

const TodoListItem: FC<{ todo: Todo }> = (props) => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const dateTime = getDateTime(new Date(props.todo.createdAt), true);

	const checkmarkClases = props.todo.completed ? "h-6 w-6 text-green-400" : "h-6 w-6 text-gray-300 dark:text-gray-400";

	const viewTodoHandler = () => {
		navigate("/todos/" + props.todo.id);
	};

	const completeTodo = () => {
		dispatch(todosActions.completeTodo(props.todo.id));
	};

	const deleteTodo = () => {
		dispatch(todosActions.deleteTodo(props.todo.id));
	};

	return (
		<li className="hover:bg-gray-50 dark:hover:bg-gray-900">
			<div className="p-4">
				<div className="flex items-center">
					<div className="flex w-full" onClick={viewTodoHandler}>
						<div className="flex-shrink-0">
							<CheckCircleIcon className={checkmarkClases} aria-hidden="true" />
						</div>
						<div className="ml-3 w-0 flex-1 pt-0.5">
							<p className="text-sm font-medium text-gray-900 dark:text-gray-100">{props.todo.text}</p>
							<div className="mt-2 flex">
								<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
									<p>
										<FormattedMessage
											id="components.todo.added"
											description="Prefixed text to the date the todo was added"
											defaultMessage="Added on "
										/><time dateTime={props.todo.createdAt.toString()}>{dateTime}</time>
									</p>
								</div>
							</div>
						</div>
					</div>
					<span className="relative z-0 inline-flex shadow-sm rounded-md ml-3 sm:w-auto">
						<button
							onClick={completeTodo}
							type="button"
							className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-green-500 bg-green-50 dark:bg-green-500 text-sm font-medium text-green-600 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-600 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 w-full"
						>
							<span className="sr-only">Complete</span>
							<CheckIcon className="h-5 w-5" aria-hidden="true" />
						</button>
						<button
							onClick={deleteTodo}
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