import { getCurrentLocation } from "./getGeolocation";
import { PhotoData } from "../types/PhotoData";
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
      uri: photoPath,
      data: formattedHour,
      hora: formattedDate,
      latitude: location?.latitude,
      longitude: location?.longitude,
    };
};