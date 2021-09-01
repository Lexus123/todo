import { lazy, Suspense } from "react";
import Notification from "./components/notification/Notification";
import Layout from "./components/layout/Layout";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import Loading from "./components/loading/Loading";

const HomePage = lazy(() => import("./pages/HomePage"));
const TodoPage = lazy(() => import("./pages/TodoPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App = () => {
	const showNotification = useSelector(state => state.notifications.show);

	return (
		<Layout title="Todo list">
			<Suspense fallback={<Loading />}>
				<Switch>
					<Route path="/" exact>
						<Redirect to="todos" />
					</Route>
					<Route path="/todos" exact>
						<HomePage />
					</Route>
					<Route path='/todos/:todoId'>
						<TodoPage />
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
