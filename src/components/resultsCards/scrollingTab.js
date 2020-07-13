import React from 'react'
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AusRes from './ausRes';

const MyTab = styled(Tabs)({
  backgroundColor:'#FFFFFF00',
  paddingBottom: 20,
  paddingTop: 20
  
})

const MyBox = styled(Box)({
    backgroundColor: '#FFFFFF00'
})

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <MyBox >
          {children}
        </MyBox>
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function ScrollableTabsButtonAuto() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <div>
        
          <MyTab
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Race tab"
          >
            <Tab label="Austrian GP" {...a11yProps(0)} />
            <Tab label="SteierMark GP" {...a11yProps(1)} />
            <Tab label="Hungarian GP" {...a11yProps(2)} />
            <Tab label="British GP" {...a11yProps(3)} />
            <Tab label="70th Anniversary GP" {...a11yProps(4)} />
            <Tab label="Spanish GP" {...a11yProps(5)} />
            <Tab label="Belgian GP" {...a11yProps(6)} />
          </MyTab>


        <TabPanel value={value} index={0}>
            <AusRes/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <h3>Coming Soon</h3>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <h3>Coming Soon</h3>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <h3>Coming Soon</h3> 
        </TabPanel>
        <TabPanel value={value} index={4}>
            <h3>Coming Soon</h3>       
        </TabPanel>
        <TabPanel value={value} index={5}>
            <h3>Coming Soon</h3>  
        </TabPanel>
      </div>
    )
}
