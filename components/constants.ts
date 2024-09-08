import * as Device from 'expo-device';
export const isTablet = Device.deviceType === Device.DeviceType.TABLET;
export const isIOS = Device.osName === 'iOS';
