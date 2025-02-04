/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {YellowBox} from 'react-native'


YellowBox.ignoreWarnings([
  'Warning: Failed prop type: Invalid prop `tintColor` supplied to `Image`',
]);


AppRegistry.registerComponent(appName, () => App);
