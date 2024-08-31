import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, Image } from 'react-native';
import { Card } from '~/components/Card';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Stack.Screen />
      <View style={styles.container}>
        <View
          style={{
            padding: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            marginTop: 40,
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
        </View>
        <Image style={{ alignItems: 'flex-end' }} source={require('../../assets/1.png')} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 15,
  },
});
