import { Fragment, useEffect, useState } from "react";
import SearchSort from './components/searchsort/SearchSort';
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

	useEffect(() => {
		setHasTodos(searchedTodos.length > 0);
	}, [searchedTodos]);

	useEffect(() => {
		setSearchedTodos(todos);
	}, [todos]);

	useEffect(() => {
		setSearchedTodos(todos.filter((t) => t.text.toLowerCase().includes(searchText.toLowerCase())));
	}, [todos, searchText]);

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
						<SearchSort onSearch={setSearchText} searchValue={searchText} />
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
