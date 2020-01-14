/**
 * @format
 */

import {AppRegistry} from 'react-native';

//import App from './App';
import {PostsComponent} from './app/MyNewScreen';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => PostsComponent);
