import * as FileSystem from 'expo-file-system';
import { savePhoto } from '../../utils/useCameraStorage';
import { PhotoData } from '../../types/PhotoData';

jest.mock('expo-file-system');

describe('savePhoto', () => {
  const mockInfoPhoto: PhotoData = {
    uri: 'temp/path/to/photo.jpg',
    jsonPath: '',
    data: '21/07/2025',
    hora: '15:00',
    latitude: -23.5,
    longitude: -46.6,
  };

  const mockFileSystem = FileSystem as jest.Mocked<typeof FileSystem>;

  beforeEach(() => {
    jest.clearAllMocks();
    mockFileSystem.getInfoAsync.mockResolvedValue({ exists: false } as any);
    mockFileSystem.makeDirectoryAsync.mockResolvedValue();
    mockFileSystem.moveAsync.mockResolvedValue();
    mockFileSystem.writeAsStringAsync.mockResolvedValue();
  });

  it('deve salvar a foto e o JSON corretamente', async () => {
    const result = await savePhoto(mockInfoPhoto);

    expect(mockFileSystem.getInfoAsync).toHaveBeenCalled();
    expect(mockFileSystem.makeDirectoryAsync).toHaveBeenCalled();
    expect(mockFileSystem.moveAsync).toHaveBeenCalledWith({
      from: `file://${mockInfoPhoto.uri}`,
      to: expect.stringContaining('app_visto_'),
    });
    expect(mockFileSystem.writeAsStringAsync).toHaveBeenCalled();
    expect(result).toBe(true);
  });

  it('deve retornar null em caso de erro', async () => {
    mockFileSystem.moveAsync.mockRejectedValue(new Error('Erro simulado'));
    const result = await savePhoto(mockInfoPhoto);
    expect(result).toBeNull();
  });
});
