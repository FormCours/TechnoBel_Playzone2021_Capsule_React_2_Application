import { Stack, Typography } from '@mui/material';
import { Outlet, useOutlet } from 'react-router';
import ButtonLink from '../../components/button-link/button-link';
import Title from '../../components/title/title';

const Message = () => {
    const outlet = useOutlet();

    return (
        <main>
            <Title text='Messages' />
            <Stack spacing={2} direction="row" marginBottom={2}>
                <ButtonLink to='form'>
                    Ajouter un Message
                </ButtonLink>
                <ButtonLink to='list'>
                    Voir les Messages
                </ButtonLink>
            </Stack>

            {!outlet ? (
                <Typography variant='h5'>
                    Message de l'API
                </Typography>
            ) : (
                <Outlet />
            )}
        </main>
    );
};

export default Message;