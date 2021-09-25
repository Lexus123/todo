import { Fragment } from "react";
import Card from "../components/ui/Card";
import SearchSort from "../components/searchsort/SearchSort";
import Form from "../components/form/Form";
import Empty from "../components/todo/Empty";
import TodoList from "../components/todo/TodoList";
import { useSelector } from 'react-redux';
import ListContainer from "../components/ui/ListContainer";

const TodosPage = () => {
	// Get some store values
	const searchText = useSelector(state => state.todos.searchText);
	const sortMethod = useSelector(state => state.todos.sortMethod);
	const todos = useSelector(state => state.todos.todos);

	// Sort the array
	let sortedTodos = [];

	if (sortMethod.key === 1) {
		sortedTodos = [...todos].sort((a, b) => a.text > b.text ? 1 : -1);
	}
	if (sortMethod.key === 2) {
		sortedTodos = [...todos].sort((a, b) => a.text < b.text ? 1 : -1);
	}
	if (sortMethod.key === 3) {
		sortedTodos = [...todos].sort((a, b) => a.createdAt < b.createdAt ? 1 : -1);
	}
	if (sortMethod.key === 4) {
		sortedTodos = [...todos].sort((a, b) => a.createdAt > b.createdAt ? 1 : -1);
	}

	// Filter the sorted array based on search text
	const searchedTodos = sortedTodos.filter(todo => todo.text.toLowerCase().includes(searchText.toLowerCase()));

	const hasTodos = todos.length > 0;

	return (
		<Fragment>
			<Card>
				<Form />
			</Card>
			<Card>
				<SearchSort searchValue={searchText} />
			</Card>
			{!hasTodos && <Empty />}
			<ListContainer padding={false}>
				<TodoList todos={searchedTodos} />
			</ListContainer>
		</Fragment>
	);
};

export default TodosPage;