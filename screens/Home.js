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

const LabelBox = (props) => {
  const flex = props.flex ? props.flex: 1
  return (
    <View style={[styles.labelBox, {flex: flex}]}>
      <Text style={styles.labelText}>{props.label}</Text>
    </View>
  )
}

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


            <View style={styles.labelLine}>
              <LabelBox label={'room'} />
              <LabelBox label={'smell'} />
              <LabelBox label={'dust'} />
              <LabelBox flex={2} label={'Total'} />
            </View>

            <View style={styles.scoreLine}>
              <View style={[styles.scoreBox,{flex: 1}]}>
                <Text style={styles.scoreText}>{inputdata.id}</Text>
              </View>
              <View style={[styles.scoreBox,{flex: 1}]}>
                <Text style={styles.scoreText}>{inputdata.id}</Text>
              </View>
              <View style={[styles.scoreBox,{flex: 1}]}>
                <Text style={styles.scoreText}>{inputdata.id}</Text>
              </View>
              <View style={[styles.scoreBox,{flex: 2}]}>
                <Text style={styles.totalscoreText}>{inputdata.id}</Text>
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
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
  box_top: {
    flex: 9,
    borderBottomWidth: 1,
  },
  labelLine: {
    flex: 1,
    flexDirection: 'row',
  },
  scoreLine: {
    flex: 3,
    flexDirection: 'row',
  },
  labelBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  scoreBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  labelText: {
    fontSize: 25,
  },
  scoreText: {
    fontSize: 50,
  },
  totalscoreText: {
    fontSize: 75,
  },
});

export default Home;
