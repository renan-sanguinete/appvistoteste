import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { PhotoData } from '../types/PhotoData';
import * as FileSystem from 'expo-file-system';
import { FlatList, TouchableOpacity, View, Image, Dimensions, Pressable, StyleSheet } from 'react-native';
import LoadingList from './LoadingList';
import EmptyList from './EmptyList';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  selectedItem: PhotoData | null;
  setSelectedItem: (item: PhotoData | null) => void;
};

export const GalleryList = forwardRef((props: Props, ref) => {
    const { selectedItem, setSelectedItem } = props;
    const navigation = useNavigation<any>();
    const [items, setItems] = useState<PhotoData[]>([]);
    const [loading, setLoading] = useState(true);
    const { width } = Dimensions.get('window');
    // Calcula a quantide de colunas de acordo o tamanho da largura do aparelho
    const numColumns = Math.floor(width / 128);

    const loadPhotos = async () => {            
        try {
            const appFolderUri = FileSystem.documentDirectory + 'photos/';
            const allFiles = await FileSystem.readDirectoryAsync(appFolderUri);

            // Verifica os arquivos json da pasta. Necessário melhor tratamento para evitar erros
            const jsonFiles = allFiles.filter((f) => f.endsWith('.json'));
            items.filter(item => typeof item.uri === 'string' && item.uri.trim() !== '')

            const filesList: PhotoData[] = [];

            for (const file of jsonFiles) {
                const filePath = appFolderUri + file;
                const content = await FileSystem.readAsStringAsync(filePath);
                const allData = JSON.parse(content);
                const fileInfo = await FileSystem.getInfoAsync(allData.uri);
                if (fileInfo?.exists) {
                    console.log('allData.uri', fileInfo)
                    filesList.push(allData);
                }
            }
            setItems(filesList.reverse());
        } catch (error) {
            console.error('Erro ao carregar fotos:', error);
        } finally {
            setLoading(false);
        }
    };

    useImperativeHandle(ref, () => ({
        loadPhotos,
    }));

    useEffect(() => {
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
        renderItem={({ item }) => {
            const isSelected = selectedItem?.uri === item.uri;
            return (
            <View className='w-1/3 items-center'>
                <TouchableOpacity
                    className="w-32 h-32 m-2 rounded-3xl overflow-hidden"
                    onPress={() => {
                        navigation.navigate('Details', { item })
                    }}
                    onLongPress={() => setSelectedItem(item)}
                >
                    <Image
                    source={{ uri: item.uri }}
                    style={{ flex: 1, aspectRatio: 1}}
                    resizeMode="cover"
                    />
                </TouchableOpacity>
                {isSelected && (
                    <TouchableOpacity
                    className="w-32 h-32 m-2 rounded-3xl overflow-hidden"
                    style={styles.trashIcon}
                    hitSlop={20}
                    >
                    <MaterialCommunityIcons name="check-circle-outline" size={40} color="#fff" />
                    </TouchableOpacity>
                )}
            </View>
        )}}
      />
    </View>
 );
});

export default GalleryList;

const styles = StyleSheet.create({
  trashIcon: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
});