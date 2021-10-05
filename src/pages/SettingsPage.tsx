import Card from "../components/ui/Card";
import { Switch } from '@headlessui/react'
import { useDispatch, useSelector } from "react-redux";
import { themesActions } from "../store/themes";
import { localesActions } from "../store/locales";
import { Fragment } from "react";
import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { FormattedMessage } from "react-intl";
import ListContainer from "../components/ui/ListContainer";
import DescriptionList from "../components/ui/DescriptionList";
import { RootState } from "../store";
import { Language } from "../models/language";
import { Tool } from "../models/tool";

const classNames = (...classes: string[]) => {
	return classes.filter(Boolean).join(' ')
};

const languages: Language[] = [
	{
		key: 1,
		name: "English",
		locale: "en"
	},
	{
		key: 2,
		name: "Nederlands",
		locale: "nl"
	}
];

const tools: Tool[] = [
	{
		title: "Frontend framework",
		link: "https://github.com/facebook/react",
		name: "React"
	},
	{
		title: "Styling framework",
		link: "https://tailwindui.com/",
		name: "Tailwind (UI)"
	},
	{
		title: "State management",
		link: "https://github.com/reduxjs/redux-toolkit",
		name: "Redux Toolkit"
	},
	{
		title: "i18n",
		link: "https://github.com/formatjs/formatjs",
		name: "FormatJS (React Intl)"
	},
	{
		title: "Persistent data",
		link: "https://github.com/kilkelly/redux-localstorage-simple",
		name: "Redux LocalStorage Simple"
	},
	{
		title: "Routing",
		link: "https://github.com/remix-run/react-router",
		name: "React Router"
	},
	{
		title: "Loading animation",
		link: "https://github.com/mhnpd/react-loader-spinner",
		name: "React Loader Spinner"
	},
	{
		title: "Fade in animation",
		link: "https://github.com/gkaemmer/react-fade-in",
		name: "React Fade In"
	}
];

const SettingsPage = () => {
	const dispatch = useDispatch();

	const theme = useSelector((state: RootState) => state.themes.theme);
	const locale = useSelector((state: RootState) => state.locales.locale);

	const language = languages.find(lang => locale.toLowerCase().includes(lang.locale)) || {
		key: 1,
		name: "English",
		locale: "en"
	};

	const changeThemeHandler = () => {
		dispatch(themesActions.toggleTheme());
	};

	const changeLocaleHandler = (locale: string) => {
		dispatch(localesActions.setLocale(locale));
	};

	return (
		<Fragment>
			<Card>
				<Switch.Group as="div" className="flex items-center justify-between mb-6 pb-6 border-b-2 border-gray-100 dark:border-gray-700">
					<span className="flex-grow flex flex-col">
						<Switch.Label as="span" className="text-sm font-medium text-gray-900 dark:text-white" passive>
							<FormattedMessage
								id="pages.settingspage.darkmode.title"
								description="The title of the dark mode setting"
								defaultMessage="Dark mode"
							/>
						</Switch.Label>
						<Switch.Description as="span" className="text-sm text-gray-500 dark:text-gray-400">
							<FormattedMessage
								id="pages.settingspage.darkmode.description"
								description="The description of the dark mode setting"
								defaultMessage="The is awesome for your eyes, but it requires eyes."
							/>
						</Switch.Description>
					</span>
					<Switch
						checked={theme === "dark"}
						onChange={changeThemeHandler}
						className={classNames(
							theme === "dark" ? 'bg-indigo-500' : 'bg-gray-300',
							'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						)}
					>
						<span
							aria-hidden="true"
							className={classNames(
								theme === "dark" ? 'translate-x-5' : 'translate-x-0',
								'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
							)}
						/>
					</Switch>
				</Switch.Group>

				<div className="flex items-center justify-between">
					<span className="flex-grow flex flex-col">
						<span className="text-sm font-medium text-gray-900 dark:text-white">
							<FormattedMessage
								id="pages.settingspage.language.title"
								description="The title of the language setting"
								defaultMessage="Language"
							/>
						</span>
						<span className="text-sm text-gray-500 dark:text-gray-400">
							<FormattedMessage
								id="pages.settingspage.language.description"
								description="The description of the language setting"
								defaultMessage="Choose between two languages: Dutch and English."
							/>
						</span>
					</span>
					<Menu as="div" className="relative">
						<Menu.Button className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700 dark:hover:border-gray-900 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400">
							{language.name}
							<ChevronDownIcon className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
						</Menu.Button>
						<Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none">
							<div className="py-1">
								{languages.map(language =>
									<Menu.Item key={language.key} onClick={() => changeLocaleHandler(language.locale)}>
										{({ active }) => (
											<div
												className={classNames(
													active ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200' : 'text-gray-700 dark:text-gray-300',
													'flex justify-between px-4 py-2 text-sm'
												)}
											>
												<p>{language.name}</p>
											</div>
										)}
									</Menu.Item>
								)}
							</div>
						</Menu.Items>
					</Menu>
				</div>
			</Card>

			<ListContainer>
				<div className="px-4 py-5 sm:px-6">
					<h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
						<FormattedMessage
							id="pages.settingspage.about.title"
							description="The about title of the about section"
							defaultMessage="About"
						/></h3>
					<p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
						<FormattedMessage
							id="pages.settingspage.about.description"
							description="The subtitle of the about section"
							defaultMessage="Information about the tools used to build this app."
						/>
					</p>
				</div>
				<div className="border-t border-gray-200 dark:border-gray-600 px-4 py-5 sm:p-0">
					<DescriptionList descriptions={tools} />
				</div>
			</ListContainer>
		</Fragment>
	);
};

export default SettingsPage;