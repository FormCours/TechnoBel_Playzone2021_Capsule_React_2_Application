import { nanoid } from 'nanoid';

export const TODO_ADD = 'TODO/ADD';
export const TODO_REMOVE = 'TODO/REMOVE';
export const TODO_FINISH = 'TODO/FINISH';

export const addTask = ({ name, desc }) => ({
    type: TODO_ADD,
    payload: {
        id: nanoid(),
        name,
        desc,
        isDone: false
    }
});

export const removeTask = (id) => ({
    type: TODO_REMOVE,
    payload: id
});

export const finishTask = (id) => ({
    type: TODO_FINISH,
    payload: id
});