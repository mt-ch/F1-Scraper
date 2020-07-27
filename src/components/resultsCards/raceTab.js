import React from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import RaceResults from './raceResults';

export default ({schedule}) => {
  const [children, setChildren] = React.useState([
    schedule.map(data => (
      <TabPane key={data.name} tab={data.name}>
        <RaceResults round={data.round}/>
      </TabPane>
    ))
  ]);
  return (
    <React.StrictMode>
      <Tabs>{children}</Tabs>
    </React.StrictMode>
  );
};

