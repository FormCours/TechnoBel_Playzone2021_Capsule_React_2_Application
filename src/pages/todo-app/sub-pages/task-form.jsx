import { Button, Checkbox, FormControl, FormControlLabel, Stack, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../store/actions/todo-action';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const schema = yup.object({
    name: yup.string().required(),
    desc: yup.string(),
}).required();

const TaskForm = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: '',
            desc: ''
        },
        resolver: yupResolver(schema)
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nextAdd, setNextAdd] = useState(false);

    const onSubmit = (data) => {
        dispatch(addTask(data));
        if (nextAdd) {
            reset();
        }
        else {
            navigate('../');
        }
    };

    return (<>
        <Typography variant='h5' marginBottom={2}>
            Formulaire d'envois
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
                <FormControl fullWidth>
                    <Controller name="name" control={control}
                        render={({ field }) => (<TextField {...field}
                            variant='outlined'
                            label='Nom de la tache '
                            error={!!errors.name}
                            helperText={!!errors.name && 'Le nom est requis'} />
                        )}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <Controller name="desc" control={control}
                        render={({ field }) => (<TextField {...field}
                            variant='outlined'
                            multiline
                            rows={5}
                            label='Description de la tache' />
                        )}
                    />
                </FormControl>
                <Button type='submit' variant='contained'>Envoyer</Button>
                <FormControlLabel control={
                    <Checkbox checked={nextAdd} onClick={e => setNextAdd(e.target.checked)} />
                } label="Ajouter une autre tache" />
            </Stack>
        </form>
    </>);
};

export default TaskForm;