import * as FileSystem from 'expo-file-system';
import { PhotoData } from "../types/PhotoData";

export const savePhoto = async (
  infoPhoto: PhotoData
): Promise<boolean | null> => {
  try {
    const folderUri = FileSystem.documentDirectory + 'photos/';
    const folderInfo = await FileSystem.getInfoAsync(folderUri);
    if (!folderInfo.exists) {
      await FileSystem.makeDirectoryAsync(folderUri, { intermediates: true });
    }

    const timestamp = Date.now();
    const filename = `app_visto_${timestamp}.jpg`;
    const newPhotoPath = folderUri + filename;
    const tempUri = `file://${infoPhoto.uri}`;
    await FileSystem.moveAsync({
      from: tempUri,
      to: newPhotoPath,
    });

    const photoData: PhotoData = {
      uri: newPhotoPath,
      data: infoPhoto.data,
      hora: infoPhoto.hora,
      latitude: infoPhoto?.latitude,
      longitude: infoPhoto?.longitude,
    };

    const dataPath = folderUri + `app_visto_${timestamp}.json`;
    await FileSystem.writeAsStringAsync(dataPath, JSON.stringify(photoData));
    return true;
  } catch (error) {
    console.error('Erro ao salvar foto:', error);
    return null;
  }
};