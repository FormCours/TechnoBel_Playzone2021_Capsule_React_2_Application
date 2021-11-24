import { Alert, Button, FormControl, Snackbar, Stack, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import axios from 'axios';

// V1 - Sans redux

const schema = yup.object({
    title: yup.string().required(),
    content: yup.string().required(),
}).required();

const initialNotif = {
    isVisible: false,
    message: null,
    severity: 'success'
};

const MessageForm = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            title: '',
            content: ''
        },
        resolver: yupResolver(schema)
    });

    const [notif, setNotif] = useState({ ...initialNotif });
    const handleCloseNodif = () => {
        setNotif({ ...initialNotif });
    };

    const onSubmit = (data) => {
        axios.post('http://localhost:3333/message', data)
            .then(() => {
                setNotif({
                    isVisible: true,
                    message: 'Message Envoyé',
                    severity: 'success'
                });
            })
            .catch(() => {
                setNotif({
                    isVisible: true,
                    message: 'Echec de l\'envois',
                    severity: 'error'
                });
            });
        reset();
    };

    return (
        <main>
            <Typography variant='h5' marginBottom={2}>
                Formulaire d'envois
            </Typography>
            <Snackbar open={notif.isVisible} autoHideDuration={3000} onClose={handleCloseNodif}>
                <Alert onClose={handleCloseNodif} severity={notif.severity}>
                    {notif.message}
                </Alert>
            </Snackbar>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    <FormControl fullWidth>
                        <Controller name="title" control={control}
                            render={({ field }) => (<TextField {...field}
                                variant='outlined'
                                label='Titre du message'
                                error={!!errors.title}
                                helperText={errors.title?.message} />
                            )}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <Controller name="content" control={control}
                            render={({ field }) => (<TextField {...field}
                                variant='outlined'
                                multiline
                                rows={3}
                                label='Contenu du message'
                                error={!!errors.content}
                                helperText={errors.content?.message} />
                            )}
                        />
                    </FormControl>
                    <Button type='submit' variant='contained'>Envoyer</Button>
                </Stack>
            </form>
        </main >
    );
};

export default MessageForm;