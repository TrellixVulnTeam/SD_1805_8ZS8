import React, { Component } from 'react';
import { Text,View,TextInput,Button,StyleSheet,TouchableOpacity,ScrollView, RefreshControl} from 'react-native';
import axios from 'axios';
import DataMain from './DataMain';

import { Actions } from 'react-native-router-flux';


// const Display = (props) => {
//   return (
//     <View
//       style={styles.display}>
//       <Text style={styles.displayText}>{props.label}</Text>
//     </View>
//   )
// }

const UpdateButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.updateButton}>
      <Text style={styles.updateButtonText}>{props.label}</Text>
    </TouchableOpacity>
  )
}


class Article extends Component {

  state = {
    inputdata: [],
    refreshing: false
  }


  componentWillMount() {
    axios.get('https://mysterious-caverns-19353.herokuapp.com/users/latest')
         .then((res) => {
           this.setState({ inputdata: res.data });
         });
  }

  renderId() {
    const tmp = this.state.inputdata
      return (
            <View
              style={styles.display}>
              <Text style={styles.displayText}>{tmp.id}</Text>
            </View>

    );
  }

  renderData() {
    const tmp = this.state.inputdata
      return (
        <DataMain dataInfo={tmp} />
    );
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
    return (
      //<View style={styles.container}>
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
              <View style={styles.box1}>
                  {this.renderData()}
              </View>

              <View style={styles.box2}>
                <View style={styles.box3}>
                  <View style={styles.display}>
                    {this.renderId()}
                  </View>
                  <UpdateButton label={'update'}/>
                </View>
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
    flex:1,
    backgroundColor: '#fff',
    //flexDirection: 'column',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
  box1: {
    flex: 3,
    backgroundColor: 'white',
    borderWidth: 1,
    //: 'column',
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

export default Article;
