import { Href, Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StyleProp, ViewProps } from 'react-native';
import type { CardProps } from 'tamagui';
import { Button, H5, Image, Card as TCard, View, XStack } from 'tamagui';
interface Props extends CardProps {
  title: string;
  link: Href<string>;
  img?: string;
  style?: StyleProp<ViewProps>;
}
export function Card({ title, img, style, link, ...props }: Props) {
  const { t } = useTranslation();
  return (
    <TCard
      style={style}
      animation={'bouncy'}
      scale={0.9}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
      elevate
      size="$4"
      backgroundColor={'white'}
      borderColor={'#24C7C7'}
      {...props}>
      <TCard.Header padded>
        <H5
          alignSelf="flex-start"
          backgroundColor={'$gray12'}
          paddingVertical={5}
          paddingHorizontal={10}
          borderRadius={10}
          fontWeight={900}
          textAlign="center"
          color={'black'}
          style={{ borderRadius: 10 }}>
          {title}
        </H5>
      </TCard.Header>
      <TCard.Footer padded>
        <XStack flex={1} />
        <Link asChild href={link}>
          <Button fontWeight={900} backgroundColor="#24C7C7" borderRadius="$10">
            {t('card.link')}
          </Button>
        </Link>
      </TCard.Footer>
      <TCard.Background>
        <View position="relative">
          <View
            position="absolute"
            backgroundColor={'black'}
            borderRadius={10}
            opacity={0.45}
            zIndex={40}
            left={0}
            right={0}
            top={0}
            bottom={0}
          />
          <Image
            borderRadius={10}
            resizeMode="cover"
            alignSelf="center"
            opacity={60}
            w={'100%'}
            h={'100%'}
            source={{
              uri: img,
            }}
          />
        </View>
      </TCard.Background>
    </TCard>
  );
}
