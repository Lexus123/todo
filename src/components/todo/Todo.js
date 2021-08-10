import { CheckCircleIcon, TrashIcon } from '@heroicons/react/outline';
import { CheckIcon } from '@heroicons/react/solid';

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

	const checkmarkClases = props.todo.isCompleted ? "h-6 w-6 text-green-400" : "h-6 w-6 text-gray-300";

	return (
		<li className="hover:bg-gray-50">
			<div className="p-4">
				<div className="flex items-center">
					<div className="flex w-full">
						<div className="flex-shrink-0">
							<CheckCircleIcon className={checkmarkClases} aria-hidden="true" />
						</div>
						<div className="ml-3 w-0 flex-1 pt-0.5">
							<p className="text-sm font-medium text-gray-900">{props.todo.text}</p>
							<div className="mt-2 flex">
								<div className="flex items-center text-sm text-gray-500">
									<p>
										Added on <time dateTime={props.todo.createdAt}>{dateTime}</time>
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* <button
						type="button"
						className="inline-flex items-center p-2 border border-transparent rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						<CheckIcon className="h-5 w-5" aria-hidden="true" />
					</button> */}
					<span className="relative z-0 inline-flex shadow-sm rounded-md ml-3 sm:w-auto">
						<button
							type="button"
							className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-green-500 bg-green-50 text-sm font-medium text-green-600 hover:bg-green-200 focus:z-10 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 w-full"
						>
							<span className="sr-only">Complete</span>
							<CheckIcon className="h-5 w-5" aria-hidden="true" />
						</button>
						<button
							type="button"
							className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-red-500 bg-red-50 text-sm font-medium text-red-600 hover:bg-red-200 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 w-full"
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

export default Todo;