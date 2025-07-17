import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GaleryScreen from '../screens/GaleryScreen';
import GaleryDetailsScreen from '../screens/GaleryDetailsScreen';
import CameraScreen from '../screens/CameraScreen';
import CameraPreviewScreen from '../screens/CameraPreviewScreen';
import { StackParamList } from "../types/StackParamList";

const Stack = createNativeStackNavigator<StackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Galery">
      <Stack.Screen 
        name="Galery" 
        component={GaleryScreen} 
        options={{ title: 'Galeria de Fotos' }}
      />
      <Stack.Screen 
        name="Details" 
        component={GaleryDetailsScreen}
        options={{ title: 'Detalhes da Foto' }}
      />
      <Stack.Screen 
        name="Camera" 
        component={CameraScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen 
        name="CameraPreview" 
        component={CameraPreviewScreen}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
}