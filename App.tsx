import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigations/AppStack';
import './global.css';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
