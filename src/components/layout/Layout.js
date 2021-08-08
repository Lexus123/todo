import { Disclosure } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';

export default function Layout() {
	return (
		<div className="min-h-screen bg-gray-100">
			<div className="bg-indigo-600 pb-32">
				<Disclosure as="nav" className="bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none">
					<div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-8">
						<div className="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
							<div className="flex-1 px-2 flex justify-center">
								<div className="max-w-lg w-full lg:max-w-xs">
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
								</div>
							</div>
						</div>
					</div>
				</Disclosure>
				<header className="py-10">
					<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold text-white">Todo list</h1>
					</div>
				</header>
			</div>

			<main className="-mt-32">
				<div className="max-w-5xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
					{/* Replace with your content */}
					<div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
						<div className="h-96 border-4 border-dashed border-gray-200 rounded-lg" />
					</div>
					{/* /End replace */}
				</div>
			</main>
		</div>
	)
}
