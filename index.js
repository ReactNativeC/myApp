/**
 * @format
 */

import {AppRegistry} from 'react-native';

//import App from './App';
import {PeopleComponent} from './app/MyNewScreen';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => PeopleComponent);
