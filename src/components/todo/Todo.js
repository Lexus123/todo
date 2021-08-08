import { CheckCircleIcon } from '@heroicons/react/outline'
import { CalendarIcon } from '@heroicons/react/solid';

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

const Todo = (props) => {
	const dateTime = getDateTime(new Date(props.todo.createdAt));

	return (
		<li className="hover:bg-gray-50">
			<div className="p-4">
				<div className="flex items-start">
					<div className="flex-shrink-0">
						<CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
					</div>
					<div className="ml-3 w-0 flex-1 pt-0.5">
						<p className="text-sm font-medium text-gray-900">{props.todo.text}</p>
						<div className="mt-2 flex">
							<div className="flex items-center text-sm text-gray-500">
								<CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
								<p>
									Added on <time dateTime={props.todo.createdAt}>{dateTime}</time>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
	)
}

export default Todo;