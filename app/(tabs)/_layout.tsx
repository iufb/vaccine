import { Link, Tabs } from 'expo-router';

import { useTranslation } from 'react-i18next';
import { TabBarIcon } from '../../components/TabBarIcon';
import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { isIOS, isTablet } from '~/components/constants';

export default function TabLayout() {
  const { t } = useTranslation();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#24C7C7',
        tabBarStyle: [{ height: isIOS ? 80 : 65 }],
        tabBarInactiveTintColor: '#94a3b8',
        tabBarLabelStyle: {
          fontFamily: 'Rubik_400Regular',
          fontSize: isTablet ? 22 : 17,
          paddingBottom: isTablet ? 0 : isIOS ? 0 : 14,
          fontWeight: 900,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontFamily: 'Rubik_400Regular',
                fontSize: isTablet ? 24 : 20,
                marginLeft: 20,
              }}>
              {t('tabs.home')}
            </Text>
          ),
          headerTitleAlign: 'left',
          headerRight: () => (
            <Link href={'/modal'}>
              <FontAwesome name="gear" size={28} />
            </Link>
          ),
          headerRightContainerStyle: { paddingRight: 40, justifyContent: 'center' },
          tabBarLabel: t('tabs.home'),
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarLabel: t('tabs.info'),
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
    </Tabs>
  );
}
