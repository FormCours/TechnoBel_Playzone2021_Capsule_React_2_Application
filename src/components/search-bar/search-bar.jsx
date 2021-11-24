import { IconButton, TextField, FormControl, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Controller, useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

const schema = yup.object({
    search: yup.string().required(),
}).required();

const SearchBar = ({ label, onSearch }) => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: { search: '' },
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        onSearch(data.search);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth>
                <Controller name="search" control={control}
                    render={({ field }) => (
                        <TextField {...field}
                            variant='standard'
                            label={label}
                            error={!!errors.search}
                            helperText={errors.search && 'Veuillez saisir une valeur'} 
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton type='submit'>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    )}
                />
            </FormControl>
        </form >
    );
};

SearchBar.defaultProps = {
    onSearch: () => { },
    label: ''
};

SearchBar.propTypes = {
    onSearch: PropTypes.func,
    label: PropTypes.string
};

export default SearchBar;
