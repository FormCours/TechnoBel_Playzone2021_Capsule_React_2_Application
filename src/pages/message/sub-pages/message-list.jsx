import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../components/loading/loading';
import SearchBar from '../../../components/search-bar/search-bar';
import { fetchMessages } from '../../../store/actions/message-action';

const MessageList = () => {
    const messages = useSelector(state => state.message.data);
    const isLoading = useSelector(state => state.message.isLoading);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);

    console.log(messages);
    const messagesJSX = messages
        .filter(m => !search || m.title.toLowerCase().includes(search.toLocaleLowerCase()))
        .map(m => (
            <ListItem key={m.id} alignItems='flex-start'>
                <ListItemText
                    primary={m.title}
                    secondary={m.content}
                />
            </ListItem>
        ));

    return (
        <main>
            <Typography variant='h5'>
                Liste
            </Typography>
            <SearchBar label='Filter la liste'
                onSearch={(s) => setSearch(s)} />
            {search && (<>
                Filtre : {search}
                <Button variant='text'
                    onClick={() => setSearch('')}>
                    Retirer le filtre
                </Button>
            </>)}
            {isLoading ? (
                <Loading />
            ) : (
                <List>
                    {messagesJSX}
                </List>
            )}
        </main>
    );
};

export default MessageList;