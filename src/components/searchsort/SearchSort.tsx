import { useDispatch } from 'react-redux';
import { SortMethod, todosActions } from '../../store/todos';
import { Menu } from '@headlessui/react'
import { ChevronDownIcon, SearchIcon, SortAscendingIcon } from '@heroicons/react/solid'
import { FormattedMessage, useIntl } from 'react-intl';
import { ChangeEvent, FC } from 'react';

const classNames = (...classes: string[]) => {
	return classes.filter(Boolean).join(' ')
}

const sorts: SortMethod[] = [
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

const SearchSort: FC<{ searchValue: string }> = (props) => {
	const dispatch = useDispatch();

	const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(todosActions.setSearchText(event.target.value));
	};

	const sortHandler = (sort: SortMethod) => {
		dispatch(todosActions.setSortMethod(sort));
	};

	const placeholder = useIntl().formatMessage({ id: "components.searchsort.search.placeholder" });

	return (
		<div className="flex items-center justify-between">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<div className="relative text-gray-400 dark:text-gray-400 focus-within:text-gray-600 dark:focus-within:text-gray-200 w-full mr-2 sm:mr-2 md:mr-5 lg:mr-5">
				<div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
					<SearchIcon className="h-5 w-5" aria-hidden="true" />
				</div>
				<input
					id="search"
					className="block w-full bg-white dark:bg-gray-700 py-2 pl-10 pr-3 border-gray-300 dark:border-transparent rounded-md leading-5 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 dark:focus:ring-offset-indigo-400 focus:ring-white dark:focus:ring-transparent focus:border-white sm:text-sm"
					placeholder={placeholder}
					type="search"
					name="search"
					onChange={searchHandler}
					value={props.searchValue}
				/>
			</div>
			<Menu as="div" className="relative">
				<Menu.Button className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700 dark:hover:border-gray-900 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400">
					<SortAscendingIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
					<FormattedMessage
						id="components.searchsort.sort.button"
						description="The text of the sort button"
						defaultMessage="Sort"
					/>
					<ChevronDownIcon className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
				</Menu.Button>
				<Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						{sorts.map((sort) =>
							<Menu.Item key={sort.key} onClick={() => sortHandler(sort)}>
								{({ active }) => (
									<div
										className={classNames(
											active ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200' : 'text-gray-700 dark:text-gray-300',
											'flex justify-between px-4 py-2 text-sm'
										)}
									>
										<b>
											<FormattedMessage
												id={`components.searchsort.sorts.${sort.key}.on`}
												description="A way of sorting the todo list"
											/>
										</b>
										<p>
											<FormattedMessage
												id={`components.searchsort.sorts.${sort.key}.direction`}
												description="A way of sorting the todo list"
											/></p>
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