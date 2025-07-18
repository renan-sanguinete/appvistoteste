import { hasCameraPermission } from "../permissions/hasCameraPermission";

export const checkCameraPermissonAndNavigate = async (navigation: any) => {
    const hasPermission = await hasCameraPermission()
    if (hasPermission) {
        navigation.navigate('Camera');
    } 
};