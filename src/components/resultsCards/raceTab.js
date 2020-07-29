import React from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import RaceResults from './raceResults';
import '../../../node_modules/rc-tabs/assets/index.css';

export default function raceTab({schedule}) {
  return (
    <div style={{maxWidth: '30em', margin: '0.5em 0 0.5em 0'}}>
      <Tabs
        //tabBarPosition='top'
        tabBarGutter={true ? 10 : null}
        tabBarStyle={{background: '#222222', borderRadius: '1em', padding: '0.4em', boxShadow: '0 3px 5px 2px rgba(6, 6, 6, .2)'}}
      >
        {schedule.map(data => (
          <TabPane key={data.name} tab={data.name}>
            <RaceResults round={data.round}/>
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}


