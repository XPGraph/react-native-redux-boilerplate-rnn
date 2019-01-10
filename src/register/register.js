import {
  HomeScreen,
  SecondScreen,
} from 'screens';
import { Navigation } from 'react-native-navigation';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

export const registerComponent = () => {
  Navigation.registerComponentWithRedux('app.home', () => HomeScreen, Provider, store);
  Navigation.registerComponentWithRedux('app.second', () => SecondScreen, Provider, store);
};
