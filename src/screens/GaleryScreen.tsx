import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GaleryScreen() {
  const navigation = useNavigation<any>();

  return (
    <View className="flex-1 justify-center p-4 bg-slate-300">
      <Text className="text-xl font-bold text-center my-4">Galeria</Text>
      <TouchableOpacity
        className="bg-blue-600 px-4 py-2 my-4 rounded"
        onPress={() => navigation.navigate('Details')}
      >
        <Text className="text-white text-center">Detalhes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-red-500 px-4 py-2 my-4 rounded"
        onPress={() => navigation.navigate('Camera')}
      >
        <Text className="text-white text-center">Câmera</Text>
      </TouchableOpacity>
    </View>
  );
}