import React from 'react';
import { View} from 'react-native';
import { Scene, Router, Tabs } from 'react-native-router-flux';
import Home from './screens/Home';
import Settings from './screens/Settings';
import RailsViews from './screens/RailsViews';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = {
  tabIconContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIconStyle: {
    width: 35,
    height: 35,
    fontSize: 35,
  },
}

const TabBarIcon = props => (
  <View style={styles.tabIconContainerStyle}>
    <Icon
      name={props.iconName}
      color={props.focused ? 'blue' : 'grey'}
      style={styles.tabIconStyle}
    />
  </View>
);

const RouterComponent = () => {
  return (
    <Router>
      <Tabs
        key='root'
        swipeEnabled={ true }
        animationEnabled={ true }
      >
        <Scene
          key='home'
          component={Home}
          title='Home'
          iconName='home'
          icon={TabBarIcon}
          initial
        />
        <Scene
          key='past_data'
          component={RailsViews}
          url="https://www.google.co.jp/"
          title='Data'
          iconName='timeline'
          icon={TabBarIcon}
        />
        <Scene
          key='records'
          component={RailsViews}
          url="https://www.yahoo.co.jp/"
          title='Record Room'
          iconName='people'
          icon={TabBarIcon}
        />
        <Scene
          key='settings'
          component={Settings}
          title='Settings'
          iconName='settings'
          icon={TabBarIcon}
        />
      </Tabs>
    </Router>
  )
}

export default RouterComponent;
