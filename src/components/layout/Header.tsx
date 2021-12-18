import { ChevronDoubleLeftIcon } from '@heroicons/react/outline';
import { Disclosure } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import { CogIcon } from '@heroicons/react/solid';
import { FormattedMessage } from 'react-intl';
import { FC } from 'react';

const Header: FC<{ title: JSX.Element }> = (props) => {
	const location = useLocation();

	const isTodosPage = location.pathname === "/todos";

	return (
		<div className="bg-gradient-to-r from-indigo-500 via-indigo-500 to-indigo-600 dark:from-indigo-400 dark:via-indigo-400 dark:to-indigo-500 pb-32">
			<Disclosure as="nav" className="bg-gradient-to-r from-indigo-500 via-indigo-500 to-indigo-600  dark:from-indigo-400 dark:via-indigo-400 dark:to-indigo-500">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative h-32 flex items-center justify-between">
						<div className="flex-1 flex justify-between">
							<Link to="/" replace>
								<div className="flex items-center">
									{!isTodosPage && <ChevronDoubleLeftIcon className="h-7 w-7 text-white mr-2" />}
									<h1 className="text-3xl font-bold text-white">{props.title}</h1>
								</div>
							</Link>
							<Link
								to="/settings"
								className="inline-flex items-center p-1 text-white focus:outline-none"
							>
								<CogIcon className="h-6 w-6 mr-1" aria-hidden="true" /> <span>
									<FormattedMessage
										id="components.layout.header.settings"
										description="The text of the link that points to the settings page"
										defaultMessage="Settings"
									/></span>
							</Link>
						</div>
					</div>
				</div>
			</Disclosure>
		</div>
	);
};

export default Header;