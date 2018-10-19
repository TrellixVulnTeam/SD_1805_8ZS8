import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Balloon from "react-native-balloon";

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
        <View style={styles.wrapperStyle}>
          <Balloon
            style={styles.balloon}

            borderColor="#2E86C1"
            backgroundColor="#D6EAF8"
            width={150}
            height={200}
            triangleDirection="right"
            borderWidth={2}
            borderRadius={20}
            triangleSize={20}
          >
            <View style={styles.display}>
              <Text style={styles.textStyle}>Hello world</Text>
            </View>
          </Balloon>
          <Image
            source={src}
            style={styles.imgScreen}
          />
        </View>
  )
}

const styles = {
  wrapperStyle: {
    flex: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  display: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
    textAlignVertical: "center",
    textAlign: "center",
  },
  imgScreen: {
    flex: 2,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: 250,
    height: 350,
    flexDirection: 'row',
  },
  balloon: {
    flex: 1,
    flexDirection: 'row',
  }
}

export default DataMain;
