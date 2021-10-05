import { FC } from "react";

const Card: FC<{}> = (props) => {
	return (
		<div className="max-w-3xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
			<div className="bg-white dark:bg-gray-800 shadow dark:shadow-md rounded-lg">
				<div className="px-4 py-5 sm:p-6">{props.children}</div>
			</div>
		</div>
	);
};

export default Card;