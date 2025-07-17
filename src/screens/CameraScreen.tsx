import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, useCameraDevice} from 'react-native-vision-camera';

export default function CameraScreen() {
  const device = useCameraDevice('back');
  
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