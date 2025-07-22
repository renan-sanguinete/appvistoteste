export const Camera = {
  getCameraPermissionStatus: jest.fn(() => Promise.resolve('granted')),
  requestCameraPermission: jest.fn(() => Promise.resolve('granted')),
};
