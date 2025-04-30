import { Link, Tabs } from 'expo-router';

import { FontAwesome } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { isIOS, isTablet } from '~/components/constants';
import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
    const { t } = useTranslation();
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#611bf8',
                tabBarStyle: [{ height: isIOS ? 80 : 65 }],
                tabBarInactiveTintColor: '#94a3b8',
                tabBarLabelStyle: {
                    fontFamily: 'Rubik_400Regular',
                    fontSize: isTablet ? 22 : 15,
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
                            <FontAwesome name="gear" size={28} color={'#611bf8'} />
                        </Link>
                    ),
                    headerRightContainerStyle: { paddingRight: 40, justifyContent: 'center' },
                    tabBarLabel: t('tabs.home'),
                    tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="two"
                options={{
                    tabBarLabel: t('tabs.info'),
                    tabBarIcon: ({ color }) => <TabBarIcon name="life-saver" color={color} />,
                }}
            />
        </Tabs>
    );
}
