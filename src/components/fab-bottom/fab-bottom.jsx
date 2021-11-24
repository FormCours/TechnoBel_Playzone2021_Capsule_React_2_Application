import { Fab } from '@mui/material';
import { Box } from '@mui/system';

const FabBottom = (props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }} >
            <Box sx={{ position: 'absolute', bottom: 1, margin: 2 }}>
                <Fab {...props} >
                    {props.children}
                </Fab>
            </Box>
        </Box >
    );
};

export default FabBottom;