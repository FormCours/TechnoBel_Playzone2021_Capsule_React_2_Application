import { Outlet } from 'react-router';
import Title from '../../components/title/title';

const TodoApp = () => {
    return (
        <main>
            <Title text='Todo App' />
            <Outlet />
        </main>
    );
};

export default TodoApp;