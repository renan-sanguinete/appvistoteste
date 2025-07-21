import * as FileSystem from 'expo-file-system';
import { PhotoData } from "../types/PhotoData";


/**
 * Salva uma foto no diretório local e gera um arquivo JSON com os dados da imagem.
 *
 * @async
 * @function
 * @param {PhotoData} infoPhoto
 * @returns {Promise<boolean | null>} Retorna true se o arquivo for escrito corretamente ou null em caso de falha
 */
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

    const dataPath = folderUri + `app_visto_${timestamp}.json`;
    const photoData: PhotoData = {
      jsonPath: dataPath,
      uri: newPhotoPath,
      data: infoPhoto.data,
      hora: infoPhoto.hora,
      latitude: infoPhoto?.latitude,
      longitude: infoPhoto?.longitude,
    };
    
    await FileSystem.writeAsStringAsync(dataPath, JSON.stringify(photoData));
    return true;
  } catch (error) {
    console.error('Erro ao salvar foto:', error);
    return null;
  }
};