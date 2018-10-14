import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class yahoo extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <WebView
        source={{uri: 'https://www.nttdocomo.co.jp/'}}
        style={{marginTop: 20}}/>
    );
  }
}
