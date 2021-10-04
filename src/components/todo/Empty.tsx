import { FC } from "react";
import { FormattedMessage } from "react-intl";

const Empty: FC = () => {
	return (
		<div className="text-center">
			<svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
			</svg>
			<h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
				<FormattedMessage
					id="components.ui.empty.title"
					description="The title of the no-todos message"
					defaultMessage="No todos"
				/>
			</h3>
			<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
				<FormattedMessage
					id="components.ui.empty.description"
					description="The description of the no-todos message"
					defaultMessage="Get started by creating a new todo."
				/>
			</p>
		</div>
	);
};

export default Empty;