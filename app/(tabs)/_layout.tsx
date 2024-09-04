import { Tabs } from 'expo-router';

import { useTranslation } from 'react-i18next';
import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
  const { t } = useTranslation();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#24C7C7',
        tabBarStyle: { height: 80, paddingBottom: 10 },
        tabBarLabelStyle: {
          fontFamily: 'Rubik_400Regular',
          fontSize: 18,
          paddingBottom: 10,
          fontWeight: 900,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: t('tabs.home'),
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
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
