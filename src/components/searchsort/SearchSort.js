import { Menu } from '@headlessui/react'
import {
	ChevronDownIcon,
	SearchIcon,
	SortAscendingIcon,
} from '@heroicons/react/solid'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const SearchSort = (props) => {
	return (
		<div className="flex items-center justify-between">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<div className="relative text-gray-400 focus-within:text-gray-600 w-full sm:mr-2 md:mr-5 lg:mr-5">
				<div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
					<SearchIcon className="h-5 w-5" aria-hidden="true" />
				</div>
				<input
					id="search"
					className="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm"
					placeholder="Search"
					type="search"
					name="search"
				/>
			</div>
			<Menu as="div" className="relative">
				<Menu.Button className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					<SortAscendingIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
					Sort
					<ChevronDownIcon className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
				</Menu.Button>
				<Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						<Menu.Item>
							{({ active }) => (
								<div
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'flex justify-between px-4 py-2 text-sm'
									)}
								>

									<b>Name</b>
									<p>(A - Z)</p>
								</div>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<div
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'flex justify-between px-4 py-2 text-sm'
									)}
								>

									<b>Name</b>
									<p>(Z - A)</p>
								</div>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<div
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'flex justify-between px-4 py-2 text-sm'
									)}
								>

									<b>Date added</b>
									<p>(newest first)</p>
								</div>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<div
									className={classNames(
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
										'flex justify-between px-4 py-2 text-sm'
									)}
								>

									<b>Date added</b>
									<p>(oldest first)</p>
								</div>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Menu>
		</div>
	);
};

export default SearchSort;