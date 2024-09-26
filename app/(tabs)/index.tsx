import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Card } from '~/components/Card';
import { isTablet } from '~/components/constants';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Stack.Screen />
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              padding: 10,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
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
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: isTablet ? 350 : 200, height: isTablet ? 400 : 240 }}
              source={require('../../assets/2.png')}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    display: 'flex',
    paddingTop: 40,
    paddingHorizontal: 15,
  },
});
