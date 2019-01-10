import { registerComponent } from './register/register';
import { Navigation } from 'react-native-navigation';

registerComponent();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'app.home',
      },
    },
  });
});
