import React, { Component } from 'react';
import { WebView } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class RailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url
    }
  }

  render() {
    var {url} = this.state

    return (
      <WebView
        source={{ uri: url}}
        style={{marginTop: 20}}/>
    );
  }
}
