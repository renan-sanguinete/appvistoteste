import React from 'react';
import { View, Image, Text } from 'react-native';
import { StackParamList } from "../types/StackParamList";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
type Props = NativeStackScreenProps<StackParamList, 'Details'>;

const GalleryDetailsScreen = ({ route }: Props) => {
  const { item } = route.params;

  return (
    <View className="flex-1 items-center justify-center bg-slate-300">
      <View className="flex-[3] items-center justify-center bg-slate-300">
        <Image
          source={{ uri: item.uri }}
          style={{ flex: 1, aspectRatio: 1 }}
          resizeMode="contain"
        />
      </View>
      <SafeAreaView className="flex-[1] w-full bg-slate-300" edges={['bottom']}>
        <View className="flex-[1] mx-6 my-6 p-3 bg-white rounded-lg">
          <Text className="text-sm font-semibold text-gray-500">
            Informações
          </Text>
          <View className="h-[1] bg-slate-300 my-2"/>
          <Text className="text-xs font-medium  text-gray-500">
            {`Data / Hora: ${item.data} ${item.hora}`}
          </Text>
          {item.latitude && item.longitude && (
            <Text className="text-xs font-normal text-gray-500">
              {`Latitude / Longitude: ${item.latitude.toFixed(5)} ${item.longitude?.toFixed(5)}`}
            </Text>
            )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default GalleryDetailsScreen;
