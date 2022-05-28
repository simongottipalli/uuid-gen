import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ToolbarGithubIcon from "./Github";

const pages = ['Version1', 'Version2', 'Version3', 'Version4', 'Version5'];

const ResponsiveToolBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    function MenuBarMobileView()  {
        return (
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        )
    }

    function MenuBar() {
        return (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, display: 'block', textTransform: 'none', px: 3 }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>
        );
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <TitleIcon />
                    <TitleHeader />
                    <MenuBar />
                    <MenuBarMobileView />
                    <TitleIconMobileView />
                    <TitleHeaderMobileView />
                    <ToolbarGithubIcon />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

function TitleIcon() {
    return (
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
    );
}

function TitleIconMobileView()  {
    return (
        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
    )
}

function TitleHeader()  {
    return (
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
            }}
        >
            UUID Gen
        </Typography>
    );
}

function TitleHeaderMobileView()    {
    return (
        <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
            }}
        >
            UUID Gen
        </Typography>
    )
}
export default ResponsiveToolBar;
