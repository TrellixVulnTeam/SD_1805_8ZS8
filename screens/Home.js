import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl
} from 'react-native';
import axios from 'axios';
import DataMain from './DataMain';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputdata: [],
      refreshing: false
    }
  }

  componentWillMount() {
    axios.get('https://mysterious-caverns-19353.herokuapp.com/users/latest')
      .then((res) => {
        this.setState({ inputdata: res.data });
      });
  }

  async fetchData () {
        axios.get('https://mysterious-caverns-19353.herokuapp.com/users/latest')
         .then((res) => {
           this.setState({ inputdata: res.data });
         })
  }

_onRefresh = () => {
   this.setState({refreshing: true});
   this.fetchData().then(() => {
     this.setState({refreshing: false});
   });
 }

  render() {
    const { inputdata } = this.state
    console.log("call render")
    console.log(inputdata)
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
          }
        >
        <View style={styles.container}>
          <View style={styles.box_top}>
            <DataMain dataInfo={inputdata} />
          </View>

          <View style={styles.box_bottom}>
            <Text style={styles.displayText}>{inputdata.id}</Text>
          </View>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
  flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
  box_top: {
    flex: 3,
    borderBottomWidth: 1,
  },
  box_bottom: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayText: {
    fontSize: 100,
  },

});

export default Home;
