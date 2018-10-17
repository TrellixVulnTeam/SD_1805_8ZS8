import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

const DataMain = (props) => {
  const { id, name } = props.dataInfo;
  const { wrapperStyle } = styles;

  //スコアによって表示画像を変化
  let src = '';
  const score = id //実際は違う
  const comment = name //実際は違う
  if (score >= 90) {
    src = require('../assets/images/G.gif')
  } else if (score >= 60) {
    src = require('../assets/images/G.gif')
  } else {
    src = require('../assets/images/rabit.gif');
  }

  return (
        <View style={wrapperStyle}>
          <Image
            source={src}
            style={styles.imgScreen}
          />
        </View>
  )
}

const styles = {
  wrapperStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    //justifyContent: 'space-between',
    padding: 10
  },
  // textStyle: {
  //   fontSize: 30,
  //   fontWeight: "600",
  // },
  imgScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    // width: 250,
    // height: 350
    width: 200,
    height: 350,
    //flexDirection: 'column',
  },
}

export default DataMain;
