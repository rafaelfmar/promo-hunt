import { createStackNavigator } from 'react-navigation';

import Login from './pages/login';
import Main from './pages/main';

export default createStackNavigator(
    {
        Login,
        Main
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#251e3e'
            },
            headerTintColor: '#851e3e'
        }
    }
);
