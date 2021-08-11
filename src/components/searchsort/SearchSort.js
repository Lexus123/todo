import { Menu } from '@headlessui/react'
import { ChevronDownIcon, SearchIcon, SortAscendingIcon } from '@heroicons/react/solid'

const classNames = (...classes) => {
	return classes.filter(Boolean).join(' ')
}

const sorts = [
	{
		key: 1,
		on: "Name",
		direction: "(A - Z)"
	},
	{
		key: 2,
		on: "Name",
		direction: "(Z - A)"
	},
	{
		key: 3,
		on: "Date added",
		direction: "(newest first)"
	},
	{
		key: 4,
		on: "Date added",
		direction: "(oldest first)"
	}
];

const SearchSort = (props) => {
	const onSearchHandler = (event) => {
		props.onSearch(event.target.value);
	};

	return (
		<div className="flex items-center justify-between">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<div className="relative text-gray-400 dark:text-gray-400 focus-within:text-gray-600 dark:focus-within:text-gray-200 w-full sm:mr-2 md:mr-5 lg:mr-5">
				<div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
					<SearchIcon className="h-5 w-5" aria-hidden="true" />
				</div>
				<input
					id="search"
					className="block w-full bg-white dark:bg-gray-700 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 dark:focus:ring-offset-indigo-400 focus:ring-white dark:focus:ring-transparent focus:border-white dark:focus:border-transparent sm:text-sm"
					placeholder="Search"
					type="search"
					name="search"
					onChange={onSearchHandler}
					value={props.searchValue}
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
						{sorts.map((sort) =>
							<Menu.Item key={sort.key}>
								{({ active }) => (
									<div
										className={classNames(
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											'flex justify-between px-4 py-2 text-sm'
										)}
									>

										<b>{sort.on}</b>
										<p>{sort.direction}</p>
									</div>
								)}
							</Menu.Item>
						)}
					</div>
				</Menu.Items>
			</Menu>
		</div>
	);
};

export default SearchSort;