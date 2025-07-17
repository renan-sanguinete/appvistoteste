import React from 'react';
import { View, Image, Button } from 'react-native';
import { StackParamList } from "../types/StackParamList";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<StackParamList, 'CameraPreview'>;

const CameraPreviewScreen = ({ route, navigation }: Props) => {
  const { photoPath } = route.params;

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Image
        source={{ uri: 'file://' + photoPath }}
        style={{ width: 300, height: 400 }}
        resizeMode="cover"
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default CameraPreviewScreen;
