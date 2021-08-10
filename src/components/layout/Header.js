import { Disclosure } from '@headlessui/react';

const Header = (props) => {
	return (
		<div className="bg-gradient-to-r from-indigo-500 via-indigo-500 to-indigo-600 dark:from-indigo-400 dark:via-indigo-400 dark:to-indigo-500 pb-32">
			<Disclosure as="nav" className="bg-gradient-to-r from-indigo-500 via-indigo-500 to-indigo-600  dark:from-indigo-400 dark:via-indigo-400 dark:to-indigo-500">
				<div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-8">
					<div className="relative h-32 flex items-center justify-between">
						<div className="flex-1 px-2 flex justify-center">
							<h1 className="text-3xl font-bold text-white">{props.title}</h1>
						</div>
					</div>
				</div>
			</Disclosure>
		</div>
	);
};

export default Header;