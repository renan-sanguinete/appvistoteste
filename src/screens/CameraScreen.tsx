import { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, useCameraDevice, useCameraPermission} from 'react-native-vision-camera';

export default function CameraScreen() {
    const device = useCameraDevice('back');
    const { hasPermission, requestPermission } = useCameraPermission()
    const [cameraPermission, setCameraPermission] = useState<null | boolean>(null)
  
  if (!device) return <></>;  
  return (
    <>
        <SafeAreaView className='flex-1'>
            <Camera
                style={{flex: 1}}
                device={device}
                isActive
            />
        </SafeAreaView>
    </>
  );
}