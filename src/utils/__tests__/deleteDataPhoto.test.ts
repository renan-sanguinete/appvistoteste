import { deleteDataPhoto } from '../../utils/deleteDataPhoto';
import * as FileSystem from 'expo-file-system';
import Toast from 'react-native-toast-message';
import { PhotoData } from '../../types/PhotoData';

jest.mock('expo-file-system');
jest.mock('react-native-toast-message');

describe('deleteDataPhoto', () => {
  const item: PhotoData = {
    uri: 'path/to/photo.jpg',
    jsonPath: 'path/to/photo.json',
    data: '2025-07-21',
    hora: '14:00',
    latitude: -23.55,
    longitude: -46.63,
    };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve deletar foto e json se ambos existirem e exibir Toast', async () => {
    (FileSystem.getInfoAsync as jest.Mock)
      .mockResolvedValueOnce({ exists: true }) // foto
      .mockResolvedValueOnce({ exists: true }); // json

    await deleteDataPhoto(item);

    expect(FileSystem.getInfoAsync).toHaveBeenCalledWith(item.uri);
    expect(FileSystem.deleteAsync).toHaveBeenCalledWith(item.uri, { idempotent: true });

    expect(FileSystem.getInfoAsync).toHaveBeenCalledWith(item.jsonPath);
    expect(FileSystem.deleteAsync).toHaveBeenCalledWith(item.jsonPath, { idempotent: true });

    expect(Toast.show).toHaveBeenCalledWith({
      type: 'info',
      text1: 'Removido',
      text2: 'Dados da foto foram removidos',
    });
  });

  it('não deve deletar arquivos inexistentes, mas deve exibir Toast', async () => {
    (FileSystem.getInfoAsync as jest.Mock)
      .mockResolvedValueOnce({ exists: false }) // foto
      .mockResolvedValueOnce({ exists: false }); // json

    await deleteDataPhoto(item);

    expect(FileSystem.deleteAsync).not.toHaveBeenCalled();
    expect(Toast.show).toHaveBeenCalled();
  });

  it('deve capturar e logar erro se algo der errado', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    (FileSystem.getInfoAsync as jest.Mock).mockRejectedValue(new Error('Erro simulado'));

    await deleteDataPhoto(item);

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'Erro ao deletar a foto:',
      expect.any(Error)
    );
    consoleWarnSpy.mockRestore();
  });
});
