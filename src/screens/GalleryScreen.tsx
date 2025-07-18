import { Alert, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera } from "react-native-vision-camera";
import GalleryList from '../components/GalleryList';

export default function GalleryScreen() {
  const navigation = useNavigation<any>();

  // 
  const handleOpenCamera = async () => {
    const status = Camera.getCameraPermissionStatus();
    if (status === 'granted') {
      navigation.navigate('Camera');
    } else if (status === 'denied' || status === 'not-determined') {
      const newStatus = await Camera.requestCameraPermission();
      if (newStatus === 'granted') {
        navigation.navigate('Camera');
      } else {
        Alert.alert(
          'Acesso',
          'Permissão para usar a câmera foi negada. Vá nas configurações para permitir.',
        );
      }
    }
  };

  return (
    <View className="flex-1 overflow-hidden justify-center p-4 bg-slate-300">
      <GalleryList/>
        <TouchableOpacity
          className="bg-red-500 px-4 py-2 my-4 rounded"
          onPress={() => {handleOpenCamera()}}
        >
          <Text className="text-white text-center">Câmera</Text>
        </TouchableOpacity>
    </View>
  );
}