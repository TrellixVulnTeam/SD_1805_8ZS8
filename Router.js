import React from 'react';
import { View} from 'react-native';
import { Scene, Router, Tabs } from 'react-native-router-flux';
import Home from './screens/Home';
import Past_data from './screens/Past_data';
import Records from './screens/Records';
import Settings from './screens/Settings';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import Icon from 'react-native-vector-icons/AntDesign';
//import Icon from 'react-native-vector-icons/AntDesign';


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
          component={Past_data}
          title='Data'
          iconName='equalizer'
          icon={TabBarIcon}
        />
        <Scene
          key='records'
          component={Records}
          title='Records'
          iconName='list'
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
