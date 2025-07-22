import * as Location from 'expo-location';
import { getCurrentLocation } from '../../utils/getGeolocation';

jest.mock('expo-location');

describe('getCurrentLocation', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar latitude e longitude quando a localização for obtida com sucesso', async () => {
    const mockLocation = {
      coords: {
        latitude: -23.5505,
        longitude: -46.6333,
      },
    };

    (Location.getCurrentPositionAsync as jest.Mock).mockResolvedValue(mockLocation);

    const result = await getCurrentLocation();

    expect(result).toEqual({
      latitude: -23.5505,
      longitude: -46.6333,
    });
    expect(Location.getCurrentPositionAsync).toHaveBeenCalledWith({
      accuracy: Location.Accuracy.Highest,
    });
  });

  it('deve retornar null se getCurrentPositionAsync retornar null', async () => {
    (Location.getCurrentPositionAsync as jest.Mock).mockResolvedValue(null);

    const result = await getCurrentLocation();

    expect(result).toBeNull();
  });

  it('deve lançar erro se getCurrentPositionAsync falhar', async () => {
    (Location.getCurrentPositionAsync as jest.Mock).mockRejectedValue(new Error('Erro de localização'));

    await expect(getCurrentLocation()).rejects.toThrow('Erro de localização');
  });
});
