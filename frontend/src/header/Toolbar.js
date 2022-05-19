import '../index.css';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Banner from './Banner'
import ToolbarGithubIcon from './Github'
import {Typography, styled} from "@mui/material";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function AppToolbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='transparent' >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Banner />
                    </Typography>
                    <ToolbarGithubIcon />
                </Toolbar>
            </AppBar>
            <Offset />
        </Box>
    );
}
