import * as FileSystem from 'expo-file-system';

export const deleteCachedPhoto = async (photoPath: string) => {
  try {
    const file = await FileSystem.getInfoAsync(photoPath);
    if (file.exists) {
        await FileSystem.deleteAsync(photoPath, { idempotent: true });
    }
  } catch (error) {
    console.warn('Erro ao deletar a foto:', error);
  }
};