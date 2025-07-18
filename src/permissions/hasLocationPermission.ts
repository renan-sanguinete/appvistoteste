import { Alert } from "react-native";
import * as Location from 'expo-location';

export const hasLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
        return true
    } else {
        Alert.alert(
            'Acesso Negado',
            'Permissão de acesso localização negada. Vá nas configurações para permitir.',
        );
        return false
    }
};