import React from 'react';
import { View, Image, Dimensions, Alert, Text, TouchableOpacity } from 'react-native';
import { StackParamList } from "../types/StackParamList";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { savePhoto } from "../utils/cameraStorage";
const { width, height } = Dimensions.get('window');
type Props = NativeStackScreenProps<StackParamList, 'CameraPreview'>;

const CameraPreviewScreen = ({ route, navigation }: Props) => {
  const { photoPath } = route.params;
  const imageWidth = width * 0.8;
  const imageHeight = height * 0.8;

  const handleSave = async () => {
    const savedPath = await savePhoto(photoPath);
    if (savedPath) {
      Alert.alert('Sucesso', 'Dados da foto salvos');
      navigation.navigate('Gallery');
    } else {
      Alert.alert('Erro', 'Não foi possível salvar a foto.');
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <View className="flex-[3] items-center justify-center bg-black">
      <Image
        source={{ uri: 'file://' + photoPath }}
        style={{ flex: 1, aspectRatio: 1 }}
        resizeMode="contain"
      />
      </View>
      <View className="flex-[1] items-center justify-center bg-black">
      <TouchableOpacity
        className="bg-blue-600 px-4 py-2 my-4 rounded"
        onPress={() => handleSave()}
       >
            <Text className="text-white text-center">Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-blue-600 px-4 py-2 my-4 rounded"
        onPress={() => navigation.goBack()}
       >
            <Text className="text-white text-center">Voltar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraPreviewScreen;
