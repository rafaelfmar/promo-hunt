import React from 'react';
import { WebView } from 'react-native-webview';

const webview = ({ navigation }) => (
  <WebView source={{ uri: navigation.state.params.link }} />
);

webview.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.title
});

export default webview;
