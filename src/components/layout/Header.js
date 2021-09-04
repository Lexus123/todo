import { ChevronDoubleLeftIcon } from '@heroicons/react/outline';
import { Disclosure, Switch } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { themesActions } from '../../store/themes';
import { Link, useLocation } from 'react-router-dom';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const Header = (props) => {
	const dispatch = useDispatch();

	const theme = useSelector(state => state.themes.theme);

	const location = useLocation();

	const isHomePage = location.pathname === "/todos";

	const changeThemeHandler = () => {
		dispatch(themesActions.toggleTheme());
	};

	return (
		<div className="bg-gradient-to-r from-indigo-500 via-indigo-500 to-indigo-600 dark:from-indigo-400 dark:via-indigo-400 dark:to-indigo-500 pb-32">
			<label htmlFor='dark-mode' className="sr-only">Dark mode</label>
			<Disclosure as="nav" className="bg-gradient-to-r from-indigo-500 via-indigo-500 to-indigo-600  dark:from-indigo-400 dark:via-indigo-400 dark:to-indigo-500">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative h-32 flex items-center justify-between">
						<div className="flex-1 flex justify-between">
							<Link to="/" replace>
								<div className="flex items-center">
									{!isHomePage && <ChevronDoubleLeftIcon className="h-7 w-7 text-white mr-2" />}
									<h1 className="text-3xl font-bold text-white">{props.title}</h1>
								</div>
							</Link>
							<Switch.Group as="div" className="flex items-center">
								<Switch
									checked={theme === "dark"}
									onChange={changeThemeHandler}
									className={classNames(
										theme === "dark" ? 'bg-indigo-600' : 'bg-gray-200',
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
								<Switch.Label as="span" className="ml-3">
									<span className="text-sm font-medium text-white">Dark mode</span>
								</Switch.Label>
							</Switch.Group>
						</div>
					</div>
				</div>
			</Disclosure>
		</div>
	);
};

export default Header;