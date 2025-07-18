import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigations/AppStack';
import Toast from 'react-native-toast-message';
import './global.css';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
      <Toast />
    </NavigationContainer>
  );
}
