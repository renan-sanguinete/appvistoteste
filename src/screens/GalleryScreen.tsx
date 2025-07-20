import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GalleryList from '../components/GalleryList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { checkCameraPermissonAndNavigate } from '../utils/checkPermissionAndNavigate';
import GalleryListOptions from '../components/GalleryListOptions';
import { useRef, useState } from 'react';
import { PhotoData } from '../types/PhotoData';
import { deleteDataPhoto } from '../utils/deleteDataPhoto';

export default function GalleryScreen() {
  const navigation = useNavigation<any>();
  const [selectedItem, setSelectedItem] = useState<PhotoData | null>(null);
  const galleryRef = useRef<any>(null);

  const handleDeletePhoto = async (item: PhotoData) => {
          await deleteDataPhoto(item);
          galleryRef.current?.loadPhotos(); // Atualiza a lista depois de deletar foto
      };

  return (
    <View className="flex-1 overflow-hidden justify-center p-4 bg-slate-300">
      {selectedItem  && (
        <GalleryListOptions
          onDelete={() => {
            handleDeletePhoto(selectedItem);
            setSelectedItem(null);
          }}
          onCancel={() => setSelectedItem(null)}
        />
      )}
      <GalleryList 
      ref={galleryRef}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}/>
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