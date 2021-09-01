import { lazy, Suspense } from "react";
import Notification from "./components/notification/Notification";
import Layout from "./components/layout/Layout";
import { Route, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';

const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App = () => {
	const showNotification = useSelector(state => state.notifications.show);

	return (
		<Layout title="Todo list">
			<Suspense fallback={<p>Loading...</p>}>
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="*">
						<NotFoundPage />
					</Route>
				</Switch>
			</Suspense>
			<Notification show={showNotification} />
		</Layout>
	);
};

export default App;
