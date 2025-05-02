import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';

import { Card } from '~/components/Card';
import { rMS, rS, rV } from '~/components/utils';

export default function Home() {
  const { t } = useTranslation();
  const { width, height } = Dimensions.get('window');
  console.log(width, height);
  return (
    <>
      {/* <Stack.Screen /> */}
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/gradient.png')}
          style={{
            width: '100%',
            height: rV(400),
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}
          imageStyle={{ borderRadius: 20 }}>
          <Link
            style={{
              position: 'absolute',
              right: rS(20),
              top: rV(50),
            }}
            href={'/modal'}>
            <FontAwesome name="gear" size={28} color={'white'} />
          </Link>
        </ImageBackground>
        <View
          style={{
            padding: rMS(10),
            gap: rV(10),
            marginTop: rV(-300),
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          <Card
            img={require('../../assets/home-bg-1.jpg')}
            title={t('home.links.1')}
            link="/home/Introdution"
          />
          <Card
            img={require('../../assets/home-bg-2.jpg')}
            title={t('home.links.2')}
            link="/home/Definitions"
          />
          <Card
            img={require('../../assets/home-bg-3.jpg')}
            title={t('home.links.3')}
            link="/home/Abbr"
          />
          <Card
            img={require('../../assets/home-bg-4.jpg')}
            title={t('home.links.4')}
            link="/info/about"
          />
          <Text
            style={{
              fontSize: rMS(24),
              marginTop: rV(20),
              marginHorizontal: 'auto',
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#15803d',
            }}>
            {t('home.title')}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
});
