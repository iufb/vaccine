import { FontAwesome } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Image, TouchableOpacity, View } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import { isTablet } from '~/components/constants';

export const StackScreen = ({
  title,
  showBackBtn = true,
}: {
  title: string;
  showBackBtn?: boolean;
}) => {
  const router = useRouter();
  return (
    <Stack.Screen
      options={{
        headerTitleAlign: 'center',
        headerTitle: () => (
          <TextTicker
            style={{
              fontSize: isTablet ? 24 : 20,
              fontFamily: 'Rubik_400Regular',
              textAlign: 'center',
            }}
            duration={10000}
            loop
            bounce
            repeatSpacer={50}
            marqueeDelay={1000}>
            {title}
          </TextTicker>
        ),
        headerLeft: showBackBtn
          ? () => (
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  paddingHorizontal: 4,
                  justifyContent: 'center',
                  marginHorizontal: 5,
                }}
                onPress={() => router.back()}>
                <FontAwesome size={isTablet ? 30 : 24} color={'#24C7C7'} name="chevron-left" />
              </TouchableOpacity>
            )
          : undefined,
        headerBackVisible: false,
        headerBackTitleVisible: false,
      }}
    />
  );
};
