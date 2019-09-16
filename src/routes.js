import { createStackNavigator } from 'react-navigation';

import Login from './pages/login';
import Main from './pages/main';
import CreatePromo from './pages/createpromo';
import WebView from './pages/webview';

export default createStackNavigator(
  {
    Login,
    Main,
    CreatePromo,
    WebView
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#051e3e'
      },
      headerTintColor: '#FFF'
    }
  }
);
