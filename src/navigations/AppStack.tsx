import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GalleryScreen from '../screens/GalleryScreen';
import GalleryDetailsScreen from '../screens/GalleryDetailsScreen';
import CameraScreen from '../screens/CameraScreen';
import CameraPreviewScreen from '../screens/CameraPreviewScreen';
import { StackParamList } from "../types/StackParamList";

const Stack = createNativeStackNavigator<StackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Gallery">
      <Stack.Screen 
        name="Gallery" 
        component={GalleryScreen} 
        options={{ title: 'Galeria de Fotos' }}
      />
      <Stack.Screen 
        name="Details" 
        component={GalleryDetailsScreen}
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