import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GalleryList from '../components/GalleryList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { checkCameraPermissonAndNavigate } from '../utils/checkPermissionAndNavigate';
import GalleryListOptions from '../components/GalleryListOptions';
import { useRef, useState } from 'react';
import { PhotoData } from '../types/PhotoData';
import { deleteDataPhoto } from '../utils/deleteDataPhoto';

/**
 * Tela principal do aplicativo de Galeria de Fotos.
 *
 * Exibe a lista de fotos salvas localmente. 
 * Ao selecionar uma foto é possível a exlusão da foto. Caso o usuário exclua a foto a lista é atualizada.
 * Ao acessar a primeira vez o botão `Tirar uma foto` é requisitado o acesso as permissões de camera do dispositivo.
 * Caso o usuário já tenha as permissões concedidas é redirecionado a tela Camera.
 * 
 * Componentes:
 * GalleryList -  para exibir as imagens.
 * GalleryListOptions - quando uma imagem é selecionada.
 * SafeAreaView - utilizado para exibir o botão "Tirar uma foto" sem que haja conflito com o bottom.
 *
 * @component
 * @returns {JSX.Element} Tela da galeria de fotos.
 */
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