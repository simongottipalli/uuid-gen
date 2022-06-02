import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './header/Header';
import Content from './content/Content'
import reportWebVitals from './utils/reportWebVitals';
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from './theme'


class App extends React.Component   {
    constructor(props) {
        super(props);
        this.state = {}
        this.navigatePage = this.navigatePage.bind(this)
    }

    navigatePage(pageTitle)  {
        this.setState(() => {
            return {
                page: pageTitle,
            }
        });
    }

    render()    {
        return (
            <>
                <NavBar onChange={this.navigatePage} />
                <Content page={this.state.page} />
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline>
            <React.StrictMode>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <App />
            </React.StrictMode>
        </CssBaseline>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
