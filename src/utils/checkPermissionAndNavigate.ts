import { hasCameraPermission } from "../permissions/hasCameraPermission";

export const checkCameraPermissonAndNavigate = async (navigation: any) => {
    console.log('checkCameraPermissonAndNavigate')
    const hasPermission = await hasCameraPermission()
    console.log('hasPermission', hasPermission)
    if (hasPermission) {
        navigation.navigate('Camera');
    } 
};