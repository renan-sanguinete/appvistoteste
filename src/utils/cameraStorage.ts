import * as FileSystem from 'expo-file-system';
import { PhotoData } from "../types/PhotoData";
import { getCurrentLocation } from "../utils/geolocation";

export const savePhoto = async (
  tempPath: string
): Promise<string | null> => {
  try {
    const folderUri = FileSystem.documentDirectory + 'photos/';
    const folderInfo = await FileSystem.getInfoAsync(folderUri);
    if (!folderInfo.exists) {
      await FileSystem.makeDirectoryAsync(folderUri, { intermediates: true });
    }

    const timestamp = Date.now();
    const filename = `app_visto_${timestamp}.jpg`;
    const newPhotoPath = folderUri + filename;
    const tempUri = `file://${tempPath}`;
    await FileSystem.moveAsync({
      from: tempUri,
      to: newPhotoPath,
    });

    const now = new Date();
    const formattedDate = now.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    const location = await getCurrentLocation();
    const photoData: PhotoData = {
      uri: newPhotoPath,
      data: formattedDate,
      hora: now.toTimeString().split(' ')[0],
      latitude: location?.latitude,
      longitude: location?.longitude,
    };

    const dataPath = folderUri + `app_visto_${timestamp}.json`;
    await FileSystem.writeAsStringAsync(dataPath, JSON.stringify(photoData));
    console.log('json', photoData)
    return newPhotoPath;
  } catch (error) {
    console.error('Erro ao salvar foto:', error);
    return null;
  }
};