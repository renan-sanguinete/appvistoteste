import * as FileSystem from 'expo-file-system';
import Toast from 'react-native-toast-message';

/**
 * Verifica se o caminho da foto existe antes de chamar a função deleteAsync
 *
 * @async
 * @function
 * @param {string} photoPath 
 * @returns {Promise<void>} Realiza as ações sem retorno de valor.
 */
export const deleteCachedPhoto = async (photoPath: string) => {
  try {
    const file = await FileSystem.getInfoAsync(photoPath);
    if (file.exists) {
        await FileSystem.deleteAsync(photoPath, { idempotent: true });
        Toast.show({
            type: 'info',
            text1: 'Removido',
            text2: 'Foto foi removida',
        });
    }
  } catch (error) {
    console.warn('Erro ao deletar a foto:', error);
  }
};