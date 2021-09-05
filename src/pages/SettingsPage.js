import Card from "../components/ui/Card";
import { Switch } from '@headlessui/react'
import { useDispatch, useSelector } from "react-redux";
import { themesActions } from "../store/themes";
import { Fragment } from "react";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const SettingsPage = () => {
	const dispatch = useDispatch();

	const theme = useSelector(state => state.themes.theme);

	const changeThemeHandler = () => {
		dispatch(themesActions.toggleTheme());
	};

	return (
		<Fragment>
			<Card padding={true} flex={false}>
				<Switch.Group as="div" className="flex items-center justify-between mb-7 pb-6 border-b-2 border-gray-100 dark:border-gray-700">
					<span className="flex-grow flex flex-col">
						<Switch.Label as="span" className="text-sm font-medium text-gray-900 dark:text-white" passive>
							Dark mode
						</Switch.Label>
						<Switch.Description as="span" className="text-sm text-gray-500 dark:text-gray-400">
							Dark mode is echt super prettig voor je ogen. Werkt alleen als je ogen hebt.
						</Switch.Description>
					</span>
					<Switch
						checked={theme === "dark"}
						onChange={changeThemeHandler}
						className={classNames(
							theme === "dark" ? 'bg-indigo-600' : 'bg-gray-300',
							'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						)}
					>
						<span
							aria-hidden="true"
							className={classNames(
								theme === "dark" ? 'translate-x-5' : 'translate-x-0',
								'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
							)}
						/>
					</Switch>
				</Switch.Group>

				<div className="flex items-center justify-between">
					<span className="flex-grow flex flex-col">
						<span className="text-sm font-medium text-gray-900 dark:text-white">
							Language
						</span>
						<span className="text-sm text-gray-500 dark:text-gray-400">
							Keuze uit twee talen: Engels en Nederlands.
						</span>
					</span>
					<Menu as="div" className="relative inline-block text-left">
						<div>
							<Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
								Options
								<ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
							</Menu.Button>
						</div>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="py-1">
									<Menu.Item>
										{({ active }) => (
											<a
												href="#"
												className={classNames(
													active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
													'block px-4 py-2 text-sm'
												)}
											>
												Account settings
											</a>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<a
												href="#"
												className={classNames(
													active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
													'block px-4 py-2 text-sm'
												)}
											>
												Support
											</a>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</Card>
		</Fragment>
	);
};

export default SettingsPage;