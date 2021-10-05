import { FC } from "react";

const ListContainer: FC<{}> = (props) => {
	return (
		<div className="max-w-3xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
			<div className="bg-white dark:bg-gray-800 shadow dark:shadow-md rounded-lg">
				{props.children}
			</div>
		</div>
	);
};

export default ListContainer;