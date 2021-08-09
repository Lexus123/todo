import { Fragment, useState } from "react";
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

	const hasTodos = todos.length > 0;

	const addTodo = (todo) => {
		setShow(true);
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
						<SearchSort />
					</Card>
					{!hasTodos && <Empty />}
					<Card padding={false}>
						<Todos todos={todos} />
					</Card>
				</Main>
			</Structure>
			<Notification show={show} setShow={setShow} />
		</Fragment>
	);
};

export default App;
