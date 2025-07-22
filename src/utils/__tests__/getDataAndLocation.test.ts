import { getDataAndLocation } from '../../utils/getDataAndLocation';
import * as geolocation from '../../utils/getGeolocation';

jest.mock('../../utils/getGeolocation');

describe('getDataAndLocation', () => {
  const mockLocation = {
    latitude: -23.5505,
    longitude: -46.6333,
  };

  const fakePath = 'path/to/photo.jpg';

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers().setSystemTime(new Date('2025-07-21T14:35:00Z'));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('deve retornar PhotoData com data, hora e localização corretamente', async () => {
    (geolocation.getCurrentLocation as jest.Mock).mockResolvedValue(mockLocation);

    const result = await getDataAndLocation(fakePath);

    expect(result).toEqual({
      jsonPath: '',
      uri: fakePath,
      data: '21/07/2025',
      hora: '11:35:00', // valor da hora alterado por cauda da conversão pt-BR
      latitude: mockLocation.latitude,
      longitude: mockLocation.longitude,
    });
  });

  it('deve lidar com localização nula corretamente', async () => {
    (geolocation.getCurrentLocation as jest.Mock).mockResolvedValue(null);

    const result = await getDataAndLocation(fakePath);

    expect(result.latitude).toBeUndefined();
    expect(result.longitude).toBeUndefined();
  });
});
