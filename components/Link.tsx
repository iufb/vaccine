import { FontAwesome } from '@expo/vector-icons';
import { Link as ExpoLink, Href, useRouter } from 'expo-router';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { UIText } from '~/components/P';
import { getDimenstions, isTablet } from '~/components/constants';
interface LinkProps {
  href: Href<string>;
  name: string;
  style?: StyleProp<ViewStyle>;
  img?: ImageSourcePropType;
}
export const Link = ({ href, img, name, style }: LinkProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push(href)} style={{ width: '100%' }}>
      <View
        style={[
          {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            paddingVertical: 10,
            paddingRight: 15,
          },
          style,
        ]}>
        <View
          style={[
            { flexDirection: 'row', gap: 10, alignItems: 'center' },
            isTablet ? { width: img ? 600 : '95%' } : { width: img ? 270 : '95%' },
          ]}>
          {img && <Image source={img} style={{ width: 32, height: 32, marginLeft: 5 }} />}
          <UIText
            style={[
              { textAlign: 'left', color: '#1f2937', maxWidth: getDimenstions().width - 119 },
            ]}>
            {name}
          </UIText>
        </View>
        <FontAwesome name="chevron-right" size={20} color={'gray'} />
      </View>
    </TouchableOpacity>
  );
};
