import React, { Component } from 'react';
import { WebView } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Past_data extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

    render() {
      return (
        <WebView
          source={{uri: 'https://www.google.co.jp/'}}
          style={{marginTop: 20}}/>
      );
    }
  }
