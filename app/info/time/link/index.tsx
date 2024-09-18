import { Href, useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import { Trans, useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { Link } from '~/components/Link';
import { Zero, One, Two, Container, UIText } from '~/components/P';
import { StackScreen } from '~/components/StackScreen';

export default function TimeLink() {
  const { t } = useTranslation();
  const { id, other } = useLocalSearchParams();
  const params = JSON.parse(decodeURIComponent(other as string)) as {
    lvl1: string;
    lvl2: { name: string; href: string }[];
  };
  console.log(params);

  return (
    <>
      <StackScreen title={id as string} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 5,
          marginTop: 10,
          paddingVertical: 20,
          backgroundColor: 'white',
          flexGrow: 1,
        }}>
        <Container>
          {params.lvl2.map((l) =>
            l.href !== '#' ? (
              <Link
                style={{ borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 10 }}
                img={require('../../../../assets/virus-3.png')}
                key={l.name}
                href={l.href as Href<string>}
                name={l.name}
              />
            ) : (
              <UIText
                style={{ borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 5 }}
                key={l.name}>
                {l.name}
              </UIText>
            )
          )}
        </Container>
      </ScrollView>
    </>
  );
}
