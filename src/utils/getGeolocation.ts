import * as Location from 'expo-location';

/**
 * Obtém a localização atual do dispositivo utilizando o expo-location.
 *
 * @async
 * @function
 * @returns {Promise<{ latitude: number; longitude: number } | null>}
 */  
export const getCurrentLocation = async () => {
  const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
  if (location) {
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  }
  return null;
};