import React from 'react';
import { View, Image, Dimensions, Alert, Text, TouchableOpacity } from 'react-native';
import { StackParamList } from "../types/StackParamList";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { savePhoto } from "../utils/cameraStorage";
type Props = NativeStackScreenProps<StackParamList, 'CameraPreview'>;

const CameraPreviewScreen = async ({ route, navigation }: Props) => {
  const { infoPhoto } = route.params;

  const handleSave = async () => {
    const savedPath = await savePhoto(infoPhoto);
    if (savedPath) {
      Alert.alert('Sucesso', 'Dados da foto salvos');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Gallery' }],
      })
    } else {
      Alert.alert('Erro', 'Não foi possível salvar a foto.');
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <View className="flex-[3] items-center justify-center bg-black">
      <Image
        source={{ uri: 'file://' + infoPhoto.uri }}
        style={{ flex: 1, aspectRatio: 1 }}
        resizeMode="contain"
      />
      </View>
      <View className="flex-[1] w-full bg-slate-300">
        <View className="m-6 p-3 bg-white rounded-lg">
          <Text className="text-lg font-semibold text-gray-500">
            Informações
          </Text>
          <View className="h-[1] bg-slate-300 my-2"/>
          <Text className="text-sm font-medium  text-gray-500">
            {`Data / Hora: ${infoPhoto.data} ${infoPhoto.hora}`}
          </Text>
          {infoPhoto.latitude && infoPhoto.longitude && (
            <Text className="text-sm font-normal text-gray-500">
              {`Latitude / Longitude: ${infoPhoto.latitude.toFixed(5)} ${infoPhoto.longitude?.toFixed(5)}`}
            </Text>
            )}
        </View>
      </View>
      <View className="flex-[1] flex-row items-center justify-center bg-black">
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
