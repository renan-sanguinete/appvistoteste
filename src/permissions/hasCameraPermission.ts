import { Alert } from "react-native";
import { Camera } from "react-native-vision-camera";

/**
 * Verifica permissão para uso da câmera do dispositivo.
 *
 * Se o resultado for `granted` retorna `true`.
 * Se a permissão `denied` ou `not-determined`, solicita ao usuário acesso as permissões de câmera.
 * Se o acesso foi negado e retorna `false`.
 *
 * @async
 * @function
 * @returns {Promise<boolean>} Retorna `true` se houver permissão ao acesso a câmera do dispositivo, ou `false` caso contrário.
 */

export const hasCameraPermission = async () => {
    const status = await Camera.getCameraPermissionStatus();
    if (status === 'granted') {
        return true
    } else if (status === 'denied' || status === 'not-determined') {
        const newStatus = await Camera.requestCameraPermission();
        if (newStatus === 'granted') {
            return true
        } else {
            Alert.alert(
                'Acesso Negado',
                'Permissão para usar a câmera foi negada. Vá nas configurações para permitir.',
            );
            return false
        }
    }
};