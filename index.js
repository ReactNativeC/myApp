/**
 * @format
 */

import {AppRegistry} from 'react-native';

//import App from './App';
//import {PostsComponent} from './app/MyNewScreen';
//import App from './app/MainNavigator';
import {CounterApp} from './app/CounterScreen';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => CounterApp);
