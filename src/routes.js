import About from './pages/about/about';
import NotFound from './pages/error/not-found';
import Home from './pages/home/home';
import Message from './pages/message/message';
import MessageForm from './pages/message/sub-pages/message-form';
import MessageList from './pages/message/sub-pages/message-list';
import RouterDemo, { Route1, Route2, RouteInitial, RouteParam, SearchParam } from './pages/router-demo/router-demo';
import TaskForm from './pages/todo-app/sub-pages/task-form';
import TaskList from './pages/todo-app/sub-pages/task-list';
import TodoApp from './pages/todo-app/todo-app';

export const appRoute = [
    { path: '', element: <Home /> },
    { path: 'about', element: <About /> },
    {
        path: 'router', element: <RouterDemo />,
        children: [
            { index: true, element: <RouteInitial /> },
            { path: 'route1', element: <Route1 /> },
            { path: 'route2', element: <Route2 /> },
            { path: 'param/:id', element: <RouteParam /> },
            { path: 'search', element: <SearchParam /> }
        ]
    },
    {
        path: 'msg', element: <Message />,
        children: [
            { path: 'list', element: <MessageList /> },
            { path: 'form', element: <MessageForm /> },
        ]
    },
    {
        path: 'todo', element: <TodoApp />,
        children: [
            { index: true, element: <TaskList /> },
            { path: 'form', element: <TaskForm /> },
        ]
    },
    { path: '*', element: <NotFound /> }
];