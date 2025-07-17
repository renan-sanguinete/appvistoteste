import React, { useEffect, useState } from 'react';
import { PhotoData } from '../types/PhotoData';
import * as FileSystem from 'expo-file-system';
import { FlatList, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import LoadingList from './LoadingList';
import EmptyList from './EmptyList';

export default function GalleryList () {
    const [items, setItems] = useState<PhotoData[]>([]);
    const [loading, setLoading] = useState(true);
    const { width } = Dimensions.get('window');
    // Calcula a quantide de colunas de acordo o tamanho da largura do aparelho
    const numColumns = Math.floor(width / 128);

    useEffect(() => {
        const loadPhotos = async () => {            
            try {
                const appFolderUri = FileSystem.documentDirectory + 'photos/';
                const allFiles = await FileSystem.readDirectoryAsync(appFolderUri);

                // Verifica os arquivos json da pasta. Necessário melhor tratamento para evitar erros
                const jsonFiles = allFiles.filter((f) => f.endsWith('.json'));

                const filesList: PhotoData[] = [];

                for (const file of jsonFiles) {
                    const filePath = appFolderUri + file;
                    const content = await FileSystem.readAsStringAsync(filePath);
                    const allData = JSON.parse(content);
                    filesList.push(allData);
                }
                setItems(filesList.reverse());
            } catch (error) {
            console.error('Erro ao carregar fotos:', error);
            } finally {
                setLoading(false);
            }
        };
        loadPhotos();
    }, []);

    if (loading) {
        return (
        <LoadingList/>
        );
    }

    if (items.length === 0) {
        return (
        <EmptyList/>
        );
    }

    return (
    <View className="flex-1 bg-slate-300">
      <FlatList
        data={items}
        keyExtractor={(item) => item.uri}
        numColumns={numColumns}
        renderItem={({ item }) => (
            <View className='flex-1'>
                <TouchableOpacity
                    className="w-32 h-32 m-2 rounded-3xl overflow-hidden border border-gray-200"
                    onPress={() => {
                        // implementar a tela para exibir detalhes da foto
                        // navigation.navigate('GalleryDetails', { ...item })
                    }}
                >
                    <Image
                    source={{ uri: item.uri }}
                    style={{ flex: 1, aspectRatio: 1 }}
                    resizeMode="cover"
                    />
                </TouchableOpacity>
            </View>
        )}
      />
    </View>
  );
}