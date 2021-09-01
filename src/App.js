import { lazy, Suspense, useEffect, useState } from "react";
import Notification from "./components/notification/Notification";
import Layout from "./components/layout/Layout";
import { Route, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';

const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App = () => {
	const showNotification = useSelector(state => state.notifications.show);

	const [show, setShow] = useState(false);
	const [todos, setTodos] = useState([]);
	const [searchedTodos, setSearchedTodos] = useState([]);
	const [hasTodos, setHasTodos] = useState(false);
	const [searchText, setSearchText] = useState("");
	// const [sort, setSort] = useState(sorts[0]);

	useEffect(() => {
		setHasTodos(searchedTodos.length > 0);
	}, [searchedTodos]);

	useEffect(() => {
		setSearchedTodos(todos);
	}, [todos]);

	useEffect(() => {
		setSearchedTodos(todos.filter((t) => t.text.toLowerCase().includes(searchText.toLowerCase())));
	}, [todos, searchText]);

	// useEffect(() => {
	// 	setTodos(ts => {
	// 		if (sort.key === 1) {
	// 			return [...ts].sort((a, b) => a.id > b.id ? 1 : -1);
	// 		}
	// 		if (sort.key === 2) {
	// 			return [...ts].sort((a, b) => a.id < b.id ? 1 : -1);
	// 		}
	// 		if (sort.key === 3) {
	// 			return [...ts].sort((a, b) => a.id < b.id ? 1 : -1);
	// 		}
	// 		if (sort.key === 4) {
	// 			return [...ts].sort((a, b) => a.id < b.id ? 1 : -1);
	// 		}
	// 	});
	// }, [sort]);

	const addTodo = (todo) => {
		setShow(true);
		setSearchText("");
		setTodos(previousTodos => [...previousTodos, todo]);
	};

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
