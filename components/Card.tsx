import { Href, Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  Text,
  View,
  ViewProps,
} from 'react-native';
import { UIText } from '~/components/P';
import { isTablet } from '~/components/constants';
interface Props {
  title: string;
  link: Href<string>;
  img?: ImageSourcePropType;
  style?: StyleProp<ViewProps>;
}
export function Card({ title, img, style, link, ...props }: Props) {
  const { t } = useTranslation();
  return (
    <View
      style={{
        borderRadius: 10,
        overflow: 'hidden',
      }}>
      <ImageBackground
        style={{
          position: 'relative',
          alignSelf: 'center',
          opacity: 60,
          width: '100%',
          height: isTablet ? 230 : 130,
        }}
        source={img}>
        <View
          style={{
            backgroundColor: 'black',
            position: 'absolute',
            borderRadius: 10,
            zIndex: 30,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            opacity: 0.45,
          }}
        />
        <View
          style={{
            zIndex: 40,
            padding: 20,
            borderRadius: 10,
            position: 'relative',
            height: '100%',
          }}>
          <View style={{ borderRadius: 10, overflow: 'hidden', alignSelf: 'flex-start' }}>
            <UIText
              style={{
                alignSelf: 'flex-start',
                backgroundColor: '#e2e8f0',
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
                fontWeight: 900,
                textAlign: 'center',
                color: 'black',
              }}>
              {title}
            </UIText>
          </View>
          <View
            style={{
              position: 'absolute',
              right: 15,
              bottom: 15,
              borderRadius: 10,
              overflow: 'hidden',
            }}>
            <Link
              href={link}
              style={{
                backgroundColor: '#24C7C7',
                borderRadius: 15,
                color: '#e4e4e7',
                fontWeight: 'bold',
                fontSize: isTablet ? 22 : 16,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              {t('card.link')}
            </Link>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
