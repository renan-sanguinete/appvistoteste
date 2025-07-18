import { Alert } from "react-native";
import { Camera } from "react-native-vision-camera";

export const hasCameraPermission = async () => {
    console.log('hasCameraPermission')
    const status = await Camera.getCameraPermissionStatus();
    console.log('status', status)
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