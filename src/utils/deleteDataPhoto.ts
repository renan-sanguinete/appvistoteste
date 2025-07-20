import * as FileSystem from 'expo-file-system';
import Toast from 'react-native-toast-message';
import { PhotoData } from '../types/PhotoData';

export const deleteDataPhoto = async (item: PhotoData) => {
    try {
        const filePhoto = await FileSystem.getInfoAsync(item.uri);
        if (filePhoto.exists) {
            await FileSystem.deleteAsync(item.uri, { idempotent: true });
        }
        const fileJson = await FileSystem.getInfoAsync(item.jsonPath);
        if (fileJson.exists) {
            await FileSystem.deleteAsync(item.jsonPath, { idempotent: true });
        }
        Toast.show({
            type: 'info',
            text1: 'Removido',
            text2: 'Dados da foto foram removidos',
        });
    } catch (error) {
        console.warn('Erro ao deletar a foto:', error);
    }
};