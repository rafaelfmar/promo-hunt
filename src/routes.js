import { createStackNavigator } from 'react-navigation';

import Login from './pages/login';
import Main from './pages/main';
import CreatePromo from './pages/createpromo';

export default createStackNavigator(
  {
    Login,
    Main,
    CreatePromo
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
