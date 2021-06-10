import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { PostCreditCards } from './PostCreditCards';
import { PostBestCreditCards } from './PostBestCreditCards';
import { PostMoneyMatters } from './PostMoneyMatters';
import { PostCreditCardsPayment } from './PostCreditCardsPayment';
import { PostSocialAnnouncement } from './PostSocialAnnouncement';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
    },
}));

function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" style={{ backgroundColor: "#262626", }}>
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <LinkTab label="Credit Cards"  {...a11yProps(0)} />
                    <LinkTab label="Best Credit Cards"  {...a11yProps(1)} />
                    <LinkTab label="Money Matters"  {...a11yProps(2)} />
                    <LinkTab label="Credit Cards Payment"  {...a11yProps(3)} />
                    <LinkTab label="Social Announcement"  {...a11yProps(4)} />

                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <PostCreditCards />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <PostBestCreditCards />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <PostMoneyMatters />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <PostCreditCardsPayment />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <PostSocialAnnouncement />
            </TabPanel>
        </div>
    );
}


export { NavTabs }