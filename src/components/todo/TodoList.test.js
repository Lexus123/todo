import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList component', () => {
	test('renders a list of zero todos', () => {
		const todos = [];
		render(<TodoList todos={todos} />);
		const elements = screen.queryAllByRole('listitem');
		expect(elements).toHaveLength(0);
	});
});
