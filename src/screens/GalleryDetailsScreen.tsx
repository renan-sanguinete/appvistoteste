import React from 'react';
import { View, Image, Dimensions, Alert, Text, TouchableOpacity } from 'react-native';
import { StackParamList } from "../types/StackParamList";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
const { width, height } = Dimensions.get('window');
type Props = NativeStackScreenProps<StackParamList, 'Details'>;

const GalleryDetailsScreen = ({ route, navigation }: Props) => {
  const { item } = route.params;
  const imageWidth = width * 0.8;
  const imageHeight = height * 0.8;
  console.log('item', item)

  return (
    <View className="flex-1 items-center justify-center bg-slate-300">
      <View className="flex-[3] items-center justify-center bg-slate-300">
        <Image
          source={{ uri: item.uri }}
          style={{ flex: 1, aspectRatio: 1 }}
          resizeMode="contain"
        />
      </View>
      <View className="flex-[1] w-full bg-slate-300">
          <View className="m-6 p-3 bg-white rounded-lg">
              <Text className="text-lg font-semibold text-gray-500">Informações</Text>
              <View className="h-[1] bg-slate-300 my-2"/>
              <Text className="text-sm font-medium  text-gray-500">{`Data / Hora: ${item.data} ${item.hora}`}</Text>
              {item.latitude && item.longitude && (
                <Text className="text-sm font-normal text-gray-500">
                  {`Latitude / Longitude: ${item.latitude.toFixed(5)} ${item.longitude?.toFixed(5)}`}
                </Text>
              )}
            </View>
      </View>
    </View>
  );
};

export default GalleryDetailsScreen;
