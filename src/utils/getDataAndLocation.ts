import { getCurrentLocation } from "./getGeolocation";
import { PhotoData } from "../types/PhotoData";

/**
 * Busca as informações de data, hora e localização e monta o arquivo de retorno
 *
 * @async
 * @function
 * @param {string} photoPath 
 * @returns {Promise<PhotoData>} Retorna obj PhotoData com os dados atualizados de data, hora e localização
 */
export const getDataAndLocation = async (photoPath: string): Promise<PhotoData> => {    
    const now = new Date();
    const formattedDate = now.toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
    });
    const formattedHour = now.toTimeString().split(' ')[0];
    const location = await getCurrentLocation();
    return {
        jsonPath: '',
        uri: photoPath,
        data: formattedHour,
        hora: formattedDate,
        latitude: location?.latitude,
        longitude: location?.longitude,
    };
};