import { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import { notificationsActions } from '../../store/notifications';
import { FormattedMessage } from 'react-intl';

const Notification = (props) => {
	const dispatch = useDispatch();

	const closeNotification = () => {
		dispatch(notificationsActions.setShow(false));
	};

	return (
		<>
			<div
				aria-live="assertive"
				className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
			>
				<div className="w-full flex flex-col items-center space-y-4 sm:items-end">
					<Transition
						show={props.show}
						as={Fragment}
						enter="transform ease-out duration-300 transition"
						enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
						enterTo="translate-y-0 opacity-100 sm:translate-x-0"
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
							<div className="p-4">
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
									</div>
									<div className="ml-3 w-0 flex-1 pt-0.5">
										<p className="text-sm font-medium text-gray-900 dark:text-gray-100">
											<FormattedMessage
												id="components.notification.title"
												description="The title of the notification"
												defaultMessage="Successfully saved!"
											/>
										</p>
										<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
											<FormattedMessage
												id="components.notification.description"
												description="The description of the notification"
												defaultMessage="You can now start procrastinating this very important todo."
											/>
										</p>
									</div>
									<div className="ml-4 flex-shrink-0 flex">
										<button
											className="bg-white dark:bg-gray-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
											onClick={closeNotification}
										>
											<span className="sr-only">Close</span>
											<XIcon className="h-5 w-5" aria-hidden="true" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</>
	)
}

export default Notification;