import { useSelector } from 'react-redux';
import { Fragment } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import Card from '../components/ui/Card';

const TodoPage = () => {
	const todos = useSelector(state => state.todos.todos);

	const params = useParams();
	const match = useRouteMatch();

	const todo = todos.find(todo => todo.id.toString() === params.todoId);

	if (!todo) {
		return <p>No todo found!</p>
	}

	return (
		<Fragment>
			<Card padding={true}>
				Ik ben je moeder
			</Card>
			<Link className='btn--flat' to={`${match.url}/comments`}>
				Show comments
			</Link>
			<p>{todo.text}</p>
		</Fragment>
	);
};

export default TodoPage;