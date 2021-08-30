import { Fragment, useEffect, useState } from "react";
import SearchSort, { sorts } from './components/searchsort/SearchSort';
import Empty from './components/ui/Empty';
import Header from "./components/layout/Header";
import Notification from "./components/notification/Notification";
import Structure from "./components/layout/Structure";
import Card from "./components/ui/Card";
import Form from "./components/form/Form";
import Todos from "./components/todo/Todos";
import Main from "./components/layout/Main";

const App = () => {
	const [show, setShow] = useState(false);
	const [todos, setTodos] = useState([]);
	const [searchedTodos, setSearchedTodos] = useState([]);
	const [hasTodos, setHasTodos] = useState(false);
	const [searchText, setSearchText] = useState("");
	const [sort, setSort] = useState(sorts[0]);

	useEffect(() => {
		setHasTodos(searchedTodos.length > 0);
	}, [searchedTodos]);

	useEffect(() => {
		setSearchedTodos(todos);
	}, [todos]);

	useEffect(() => {
		setSearchedTodos(todos.filter((t) => t.text.toLowerCase().includes(searchText.toLowerCase())));
	}, [todos, searchText]);

	useEffect(() => {
		setTodos(ts => {
			if (sort.key === 1) {
				return [...ts].sort((a, b) => a.id > b.id ? 1 : -1);
			}
			if (sort.key === 2) {
				return [...ts].sort((a, b) => a.id < b.id ? 1 : -1);
			}
			if (sort.key === 3) {
				return [...ts].sort((a, b) => a.id < b.id ? 1 : -1);
			}
			if (sort.key === 4) {
				return [...ts].sort((a, b) => a.id < b.id ? 1 : -1);
			}
		});
	}, [sort]);

	const addTodo = (todo) => {
		setShow(true);
		setSearchText("");
		setTodos(previousTodos => [...previousTodos, todo]);
	};

	return (
		<Fragment>
			<Structure setShow={setShow}>
				<Header title="Todo list" />
				<Main>
					<Card padding={true}>
						<Form addTodo={addTodo} />
					</Card>
					<Card padding={true}>
						<SearchSort onSearch={setSearchText} searchValue={searchText} onClickSortHandler={setSort} />
					</Card>
					{!hasTodos && <Empty />}
					<Card padding={false}>
						<Todos todos={searchedTodos} />
					</Card>
				</Main>
			</Structure>
			<Notification show={show} setShow={setShow} />
		</Fragment>
	);
};

export default App;
