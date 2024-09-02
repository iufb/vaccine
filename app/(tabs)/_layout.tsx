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
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: t('tabs.home'),
          tabBarLabelStyle: { fontSize: 14, paddingBottom: 10 },
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarLabel: t('tabs.info'),
          tabBarLabelStyle: { fontSize: 14, paddingBottom: 10 },
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
    </Tabs>
  );
}
