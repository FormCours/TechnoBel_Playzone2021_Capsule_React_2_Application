import { Button, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import FabBottom from '../../../components/fab-bottom/fab-bottom';
import { useDispatch } from 'react-redux';
import { finishTask, removeTask } from '../../../store/actions/todo-action';

const TaskList = () => {
    const tasks = useSelector(state => state.todo.tasks);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const taskJSX = tasks.map(m => (
        <ListItem key={m.id} alignItems='flex-start'
            sx={{ '&:hover': { backgroundColor: '#EFEFEF', } }}>
            <Stack spacing={1} direction="row" width='100%'
                alignItems='start' justifyContent='center' >
                <ListItemText sx={{ flexGrow: 1 }}
                    primary={m.name}
                    secondary={m.desc}
                />
                <Button variant='contained' color='info'
                    onClick={() => dispatch(finishTask(m.id))}
                    disabled={m.isDone}>
                    Terminer
                </Button>
                <Button variant='contained' color='error'
                    onClick={() => dispatch(removeTask(m.id))}>
                    Supprimer
                </Button>
            </Stack>
        </ListItem>
    ));

    return (<>
        <Typography variant='h5'>
            Liste de tache
        </Typography>
        <List>
            {taskJSX}
        </List>

        <FabBottom color="primary" aria-label="add"
            onClick={() => navigate('form')}>
            <AddIcon />
        </FabBottom>
    </>);
};

export default TaskList;