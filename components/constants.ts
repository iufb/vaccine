import * as Device from 'expo-device';
import { Href } from 'expo-router';
import { useTranslation } from 'react-i18next';
export const isTablet = Device.deviceType === Device.DeviceType.TABLET;
export const isIOS = Device.osName === 'iOS';
