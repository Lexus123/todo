const Card = (props) => {
	const classes = props.flex ? "flex px-4 py-5 sm:p-6" : "px-4 py-5 sm:p-6";

	const content = props.padding ? <div className={classes}>{props.children}</div> : props.children;

	return (
		<div className="max-w-3xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
			<div className="bg-white dark:bg-gray-800 shadow dark:shadow-md rounded-lg">
				{content}
			</div>
		</div>
	);
};

export default Card;