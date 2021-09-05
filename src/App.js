import { lazy, Suspense, useEffect } from "react";
import Notification from "./components/notification/Notification";
import Layout from "./components/layout/Layout";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import Loading from "./components/loading/Loading";
import { FormattedMessage, IntlProvider } from "react-intl";
import English from "./lang/en.json";
import Dutch from "./lang/nl.json";

const TodosPage = lazy(() => import("./pages/TodosPage"));
const TodoPage = lazy(() => import("./pages/TodoPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));

const App = () => {
	const showNotification = useSelector(state => state.notifications.show);
	const theme = useSelector(state => state.themes.theme);
	const locale = useSelector(state => state.locales.locale);

	useEffect(() => {
		document.documentElement.removeAttribute("class");
		document.documentElement.classList.add(theme);
	}, [theme]);

	let languagePack;
	if (locale.toLowerCase().includes("nl")) {
		languagePack = Dutch;
	} else {
		languagePack = English;
	}

	return (
		<IntlProvider locale={locale} messages={languagePack}>
			<Layout title="Todo list">
				<FormattedMessage
					id="hi"
					defaultMessage="Edit the files and save to reload"
				/>
				<Suspense fallback={<Loading />}>
					<Switch>
						<Route path="/" exact>
							<Redirect to="todos" />
						</Route>
						<Route path="/todos" exact>
							<TodosPage />
						</Route>
						<Route path='/todos/:todoId'>
							<TodoPage />
						</Route>
						<Route path="/settings" exact>
							<SettingsPage />
						</Route>
						<Route path="*">
							<NotFoundPage />
						</Route>
					</Switch>
				</Suspense>
				<Notification show={showNotification} />
			</Layout>
		</IntlProvider>
	);
};

export default App;
