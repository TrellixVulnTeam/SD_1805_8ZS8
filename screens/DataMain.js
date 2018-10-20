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
  if (score >= 81) {
    src = require('../assets/images/kuma1.png')
  } else if (score >= 61) {
    src = require('../assets/images/kuma2.png')
  } else if (score >= 41){
    src = require('../assets/images/kuma3.png')
  } else if (score >= 21){
    src = require('../assets/images/kuma4.png')
  } else {
    src = require('../assets/images/kuma5.png');
  }


  return (
        <View style={styles.wrapperStyle}>
          <View style={styles.display}>
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
              <View style={styles.textdisplay}>
                <Text style={styles.textStyle}>こんにちは，{"\n"}かめいたいき</Text>
              </View>
            </Balloon>
          </View>
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
    flex: 2,
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
    //borderWidth: 1,
  },
  textdisplay: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 25,
    textAlignVertical: "center",
    textAlign: "center",
  },
  imgScreen: {
    flex: 3,
    // alignItems: 'center',
    // justifyContent: 'center',
    //width: 25,
    height: 370,
    flexDirection: 'row',
  },
  balloon: {
    flex: 1,
    flexDirection: 'row',
  }
}

export default DataMain;
