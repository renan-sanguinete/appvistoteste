import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GalleryList from '../components/GalleryList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { checkCameraPermissonAndNavigate } from '../utils/checkPermissionAndNavigate';

export default function GalleryScreen() {
  const navigation = useNavigation<any>();

  return (
    <View className="flex-1 overflow-hidden justify-center p-4 bg-slate-300">
      <GalleryList/>
      <SafeAreaView className="w-full bg-slate-300" edges={['bottom']}>
        <TouchableOpacity
          className="bg-blue-500 w-full px-4 py-2 my-4 rounded"
          onPress={() => {checkCameraPermissonAndNavigate(navigation)}}
        >
          <Text className="text-white text-center">Tirar uma foto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}