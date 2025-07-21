import { Alert } from "react-native";
import * as Location from 'expo-location';

/**
 * Verifica permissão para uso de localização do dispositivo.
 *
 * Se o resultado for `granted` retorna `true`.
 * Se o acesso foi negado exibe um Alert e retorna `false`.
 *
 * @async
 * @function
 * @returns {Promise<boolean>} Retorna `true` se houver permissão ao acesso de localização do dispositivo, ou `false` caso contrário.
 */
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