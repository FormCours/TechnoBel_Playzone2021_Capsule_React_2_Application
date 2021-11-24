import { Button, FormControl, Stack, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../../store/actions/message-action';

const schema = yup.object({
    title: yup.string().required(),
    content: yup.string().required(),
}).required();

const MessageForm = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            title: '',
            content: ''
        },
        resolver: yupResolver(schema)
    });
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(sendMessage(data));
        reset();
    };

    return (
        <main>
            <Typography variant='h5' marginBottom={2}>
                Formulaire d'envois
            </Typography>
            
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