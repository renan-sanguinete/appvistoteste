import Toast from "react-native-toast-message";
import { hasCameraPermission } from "../permissions/hasCameraPermission";
import { hasLocationPermission } from "../permissions/hasLocationPermission";

export const checkCameraPermissonAndNavigate = async (navigation: any) => {
    const hasCameraAuthorization = await hasCameraPermission()
    const hasLocationAuthorization = await hasLocationPermission()
    if (hasCameraAuthorization && hasLocationAuthorization) {
        navigation.navigate('Camera');
    } else {
        Toast.show({
            type: 'info',
            text1: 'Acesso Negado',
            text2: 'Necessário a permissão de acesso a câmera e localização'
        })
    }
};