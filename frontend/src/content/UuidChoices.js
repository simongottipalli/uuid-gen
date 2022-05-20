import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, display: 'flex', color: 'white', }}
        >
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="UUID Choices"
                textColor='inherit'
                sx={{ borderRight: 1, borderColor: 'divider',}}
            >
                <Tab label="UUID V4" {...a11yProps(0)} />
                <Tab label="GUID" {...a11yProps(1)} />
                <Tab label="UUID V3" {...a11yProps(2)} />
                <Tab label="UUID V2" {...a11yProps(3)} />
                <Tab label="UUID V1" {...a11yProps(4)} />
                {/*<Tab label="Item Four" {...a11yProps(3)} />*/}
                {/*<Tab label="Item Five" {...a11yProps(4)} />*/}
                {/*<Tab label="Item Six" {...a11yProps(5)} />*/}
                {/*<Tab label="Item Seven" {...a11yProps(6)} />*/}
            </Tabs>
            <TabPanel value={value} index={0}>
                UUID V4 Content
            </TabPanel>
            <TabPanel value={value} index={1}>
                GUID Content
            </TabPanel>
            <TabPanel value={value} index={2}>
                UUID V3 Content
            </TabPanel>
            <TabPanel value={value} index={3}>
                UUID V2 Content
            </TabPanel>
            <TabPanel value={value} index={4}>
                UUID V1 Content
            </TabPanel>
        </Box>
    );
}
