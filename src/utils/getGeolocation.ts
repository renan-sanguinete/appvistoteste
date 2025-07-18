import * as Location from 'expo-location';

export const getCurrentLocation = async () => {
  const location = await Location.getCurrentPositionAsync({});
  if (location) {
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  }
  return null;
};