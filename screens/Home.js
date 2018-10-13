import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import DataMain from './DataMain';

import { Actions } from 'react-native-router-flux';


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
      inputdata: []
    }
  }

  componentWillMount() {
    axios.get('https://mysterious-caverns-19353.herokuapp.com/users/latest')
      .then((res) => {
        this.setState({ inputdata: res.data });
      });
  }

  render() {
    const { inputdata } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.box1}>
          <DataMain dataInfo={inputdata} />
        </View>

        <View style={styles.box2}>
          <View style={styles.box3}>
            <View style={styles.display}>
              <Text style={styles.displayText}>{inputdata.id}</Text>
            </View>
            <UpdateButton label={'update'} />
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
  box1: {
    flex: 3,
    backgroundColor: 'white',
    borderWidth: 1,
  },
  box2: {
    flex: 1,
    backgroundColor: 'white'

  },
  box3: {
    flex: 1,
    flexDirection: 'row',
  },
  display: {
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
