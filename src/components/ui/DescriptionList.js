import DescriptionListItem from "./DescriptionListItem";

const DescriptionList = (props) => {
	return (
		<dl className="sm:divide-y sm:divide-gray-200 dark:divide-gray-600">
			{
				props.descriptions.map(d => <DescriptionListItem key={d.title} title={d.title} link={d.link} name={d.name} />)
			}
		</dl>
	);
};

export default DescriptionList;