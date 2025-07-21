import * as Location from 'expo-location';

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