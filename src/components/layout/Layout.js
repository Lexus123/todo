import { Disclosure } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import Form from '../form/Form';
import Card from '../ui/Card';
import Todos from '../todo/Todos';
import { useState } from 'react';
import SearchSort from '../searchsort/SearchSort';
import Empty from '../ui/Empty';

const Layout = (props) => {
	const [todos, setTodos] = useState([]);

	const hasTodos = todos.length > 0;

	const addTodo = (todo) => {
		props.setShow(true);
		setTodos(previousTodos => [...previousTodos, todo]);
	};

	return (
		<div className="min-h-screen bg-gray-100">
			<div className="bg-gradient-to-r from-indigo-500 via-indigo-500 to-indigo-600  pb-32">
				<Disclosure as="nav" className="bg-gradient-to-r from-indigo-500 via-indigo-500 to-indigo-600">
					<div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-8">
						<div className="relative h-32 flex items-center justify-between">
							<div className="flex-1 px-2 flex justify-center">
								<h1 className="text-3xl font-bold text-white">Todo list</h1>
							</div>
						</div>
					</div>
				</Disclosure>
			</div>

			<main className="-mt-32">
				<Card padding={true}>
					<Form onSubmit={addTodo} />
				</Card>
				<Card padding={true}>
					<SearchSort />
				</Card>
				{!hasTodos && <Empty />}
				<Card padding={false}>
					<Todos todos={todos} />
				</Card>
				{/* <Card>
					<label htmlFor="search" className="sr-only">
						Search
					</label>
					<div className="relative text-gray-400 focus-within:text-gray-600">
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
				</Card> */}
			</main>
		</div>
	)
}

export default Layout;