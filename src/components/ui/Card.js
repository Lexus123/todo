const Card = (props) => {
	return (
		<div className="max-w-3xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
			{props.children}
		</div>
	);
};

export default Card;