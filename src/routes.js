import { createStackNavigator } from 'react-navigation';

import Login from './pages/login';

export default createStackNavigator(
    {
        Login
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
