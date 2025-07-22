import { deleteCachedPhoto } from '../../utils/deleteCachedPhoto';
import * as FileSystem from 'expo-file-system';
import Toast from 'react-native-toast-message';

jest.mock('expo-file-system');
jest.mock('react-native-toast-message');

describe('deleteCachedPhoto', () => {
  const photoPath = 'path/to/fake/photo.jpg';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve deletar a foto e exibir Toast se o arquivo existir', async () => {
    (FileSystem.getInfoAsync as jest.Mock).mockResolvedValue({ exists: true });
    (FileSystem.deleteAsync as jest.Mock).mockResolvedValue(undefined);

    await deleteCachedPhoto(photoPath);

    expect(FileSystem.getInfoAsync).toHaveBeenCalledWith(photoPath);
    expect(FileSystem.deleteAsync).toHaveBeenCalledWith(photoPath, { idempotent: true });
    expect(Toast.show).toHaveBeenCalledWith({
      type: 'info',
      text1: 'Removido',
      text2: 'Foto foi removida',
    });
  });

  it('não deve deletar nem mostrar Toast se o arquivo não existir', async () => {
    (FileSystem.getInfoAsync as jest.Mock).mockResolvedValue({ exists: false });

    await deleteCachedPhoto(photoPath);

    expect(FileSystem.deleteAsync).not.toHaveBeenCalled();
    expect(Toast.show).not.toHaveBeenCalled();
  });

  it('deve capturar e logar erro se algo der errado', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    (FileSystem.getInfoAsync as jest.Mock).mockRejectedValue(new Error('Falha'));

    await deleteCachedPhoto(photoPath);

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'Erro ao deletar a foto:',
      expect.any(Error)
    );
    consoleWarnSpy.mockRestore();
  });
});
