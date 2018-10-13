import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

const ImageDisplay = (score) => {
  let src = '';

  switch (score) {
    case 6:
      src = require('../assets/images/G.gif')
      break;
    case 1:
      src = require('../assets/images/G.gif')
      break;
    default:
      src = require('../assets/images/poinco.png');
      break;
  }

  return (
    // <Image
    //   source={src}
    //   style={{ width: 800, height: 500, backgroundColor: 'white' }}
    //   />
    <Image
      source={src}
      style={styles.imgScreen}
    />
  )
}


const DataMain = (dataInfo) => {
  const { id, name } = dataInfo;
  const { textStyle, wrapperStyle } = styles;

  return (
    <View style={wrapperStyle}>
      <ImageDisplay score={id} />
      { /* <Text style={textStyle}>{id}</Text> */}
      { /* <Text style={textStyle}>{name}</Text> */}
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
    fontSize: 18,
    fontWeight: "600"
  },
  imgScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
    // height: '100%',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
}

export default DataMain;
