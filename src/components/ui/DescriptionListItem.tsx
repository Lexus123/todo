import { ExternalLinkIcon } from "@heroicons/react/solid";
import { FC } from "react";

const DescriptionListItem: FC<{ title: string, name: string, link: string }> = (props) => {
	return (
		<div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
			<dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
				{props.title}
			</dt>
			<dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
				<a href={props.link} target="_blank" rel="noreferrer" className="flex items-center">{props.name}&nbsp;<ExternalLinkIcon className="h-5 w-5 text-gray-800 dark:text-white" aria-hidden="true" /></a>
			</dd>
		</div>
	);
};

export default DescriptionListItem;