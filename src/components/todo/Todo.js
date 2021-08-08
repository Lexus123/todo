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
		<li>
			<a href="#" className="block hover:bg-gray-50">
				<div className="p-4">
					<div className="flex items-start">
						<div className="flex-shrink-0">
							<CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
						</div>
						<div className="ml-3 w-0 flex-1 pt-0.5">
							<p className="text-sm font-medium text-gray-900">{props.todo.text}</p>
							{/* <p className="mt-1 text-sm text-gray-500">Added on: {props.todo.createdAt}</p> */}
							<div className="mt-2 flex">

								<div className="flex items-center text-sm text-gray-500">
									<CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
									<p>
										Added on <time dateTime={props.todo.createdAt}>{dateTime}</time>
									</p>
								</div>
							</div>
						</div>
						<div className="ml-4 flex-shrink-0 flex">
							{/* <button
									className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									onClick={() => {
										setShow(false)
									}}
								>
									<span className="sr-only">Close</span>
									<XIcon className="h-5 w-5" aria-hidden="true" />
								</button> */}
						</div>
					</div>
				</div>
			</a>
		</li>
	)
}

export default Todo;