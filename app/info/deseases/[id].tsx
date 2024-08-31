import { useGlobalSearchParams, useRouter } from 'expo-router';
import { Text } from 'tamagui';
import { StackScreen } from '~/components/StackScreen';

export default function Desease() {
  const params = useGlobalSearchParams();
  console.log(params);

  return <StackScreen title={params.id as string} />;
}
