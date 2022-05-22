import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#F0F8FF',
        },
        text: {
            primary: '#F0F8FF',
        },
        background: {
            paper: '#28293D',
            default: '#28293D',
        }
    },

    typography: {
        h5: {
            color: '#F0F8FF',
        },
        h6: {
            color: '#F0F8FF',
        }
    },
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#F0F8FF',
                },
            },
        },
        MuiAppBar : {
            styleOverrides: {
                root: {
                    backgroundColor: '#28293D',
                }
            }
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    color: '#F0F8FF',
                }
            }
        }
    },
});

export default theme;
