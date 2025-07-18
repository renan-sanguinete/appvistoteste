import { PhotoData } from "./PhotoData";

export type StackParamList = {
  Gallery: undefined;
  Details: { item: PhotoData };
  Camera: undefined;
  CameraPreview: { infoPhoto: PhotoData };
};