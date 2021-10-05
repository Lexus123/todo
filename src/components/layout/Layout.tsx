import { FC } from "react";
import Header from "./Header";

const Layout: FC<{ title: JSX.Element }> = (props) => {
	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-700">
			<Header title={props.title} />
			<main className="-mt-32">
				{props.children}
			</main>
		</div>
	);
};

export default Layout;