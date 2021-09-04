import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import Card from "../components/ui/Card";

const NotFoundPage = () => {
	const portalElement = document.getElementById("notfound");

	return (
		createPortal(<div className="absolute w-full z-50 bg-gray-100 dark:bg-gray-700 min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
			<div className="max-w-max mx-auto">
				<main className="sm:flex">
					<Card padding={true} flex={true}>
						<p className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-300 sm:text-5xl">404</p>
						<div className="sm:ml-6">
							<div className="sm:border-l sm:border-gray-200 sm:pl-6">
								<h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-5xl">Page not found</h1>
								<p className="mt-1 text-base text-gray-500 dark:text-gray-300">Please check the URL in the address bar and try again.</p>
							</div>
							<div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
								<Link
									to="/"
									className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									Go back home
								</Link>
							</div>
						</div>
					</Card>
				</main>
			</div>
		</div>, portalElement)
	);
};

export default NotFoundPage;