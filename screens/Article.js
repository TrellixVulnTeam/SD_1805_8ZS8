import React, { Component } from 'react';
import { Text,View,TextInput,Button,StyleSheet,TouchableOpacity } from 'react-native';
import axios from 'axios';
import DataMain from './DataMain';

import { Actions } from 'react-native-router-flux';


const Display = (props) => {
  return (
    <View
      style={styles.display}>
      <Text style={styles.displayText}>{props.label}</Text>
    </View>
  )
}

const UpdateButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.updateButton}>
      <Text style={styles.updateButtonText}>{props.label}</Text>
    </TouchableOpacity>
  )
}

class Article extends Component {

  //inputdataを初期化
  state = {
    inputdata: []
  }

  componentWillMount() {
    axios.get('https://mysterious-caverns-19353.herokuapp.com/users/latest')
         .then((res) => {
           this.setState({ inputdata: res.data });
         });
  }

  renderData() {
    // return this.state.inputdata.map((data) => {
    //   return <DataMain key={data.id} dataInfo={data} />
    // });
    const tmp = this.state.inputdata
      return (
      <DataMain dataInfo={tmp} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}>
            {this.renderData()}
        </View>

        <View style={styles.box2}>
          <View style={styles.box3}>
            <Display label={'score'}/>
            <UpdateButton label={'update'}/>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
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
    //borderWidth: 1,
  },
  display: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  updateButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  displayText: {
    fontSize: 20,
  },
  updateButtonText: {
    fontSize: 20,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "600"
  },
});

export default Article;
