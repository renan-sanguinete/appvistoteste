import { checkCameraPermissonAndNavigate } from '../checkPermissionAndNavigate';
import * as permissionModule from '../../permissions/hasCameraPermission';
import * as locationModule from '../../permissions/hasLocationPermission';
import Toast from 'react-native-toast-message';

jest.mock('react-native-toast-message');

describe('checkCameraPermissonAndNavigate', () => {
  const navigateMock = jest.fn();
  const navigation = { navigate: navigateMock };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve navegar para a tela da câmera se houver permissão', async () => {
    jest.spyOn(permissionModule, 'hasCameraPermission').mockResolvedValue(true);

    await checkCameraPermissonAndNavigate(navigation);

    expect(navigateMock).toHaveBeenCalledWith('Camera');
    expect(Toast.show).not.toHaveBeenCalled();
  });

  it('deve mostrar um Toast se não houver permissão', async () => {
    jest.spyOn(permissionModule, 'hasCameraPermission').mockResolvedValue(false);
    jest.spyOn(locationModule, 'hasLocationPermission').mockResolvedValue(true);

    await checkCameraPermissonAndNavigate(navigation);

    expect(navigateMock).not.toHaveBeenCalled();
    expect(Toast.show).toHaveBeenCalledWith({
      type: 'info',
      text1: 'Acesso Negado',
      text2: 'Necessário a permissão de acesso a câmera e localização',
    });
  });
});
