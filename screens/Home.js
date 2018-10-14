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

const UpdateButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.updateButton}>
      <Text style={styles.updateButtonText}>{props.label}</Text>
    </TouchableOpacity>
  )
}

class Home extends Component {
  constructor(props) {
    super(props);
    //inputdataを初期化
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
            <View style={styles.box_score}>
              <Text style={styles.displayText}>{inputdata.id}</Text>
            </View>
            <UpdateButton label={'update'} />
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
  },
  box_score: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  displayText: {
    fontSize: 100,
  },
  updateButtonText: {
    fontSize: 20,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "600"
  },
});

export default Home;
