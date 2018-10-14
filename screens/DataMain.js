import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';

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
      <ImageBackground source={src} style={styles.imgScreen} resizeMode='cover'>
        <Text style={styles.textStyle}>{comment}</Text>
      </ImageBackground>
    </View>
  )
}

const styles = {
  wrapperStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "600",
  },
  imgScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
}

export default DataMain;
