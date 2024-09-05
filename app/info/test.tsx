import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { StackScreen } from '~/components/StackScreen';
import { RadioButtonsGroup } from '~/components/Test';

export default function Test() {
  const { t } = useTranslation();
  const [answersState, setAnswers] = useState<Record<number, string>>({});
  const test = t('info.test.data', { returnObjects: true }) as {
    question: string;
    answers: string[];
    correct_answer: string;
  }[];
  const checkTest = () => {
    if (Object.keys(answersState).length < 20) {
      Alert.alert(t('info.test.alert.error'));
      return;
    }
    let right = 0;

    for (let i = 0; i < test.length; i++) {
      if (test[i].correct_answer == answersState[i]) {
        right++;
      }
    }
    Alert.alert(t('info.test.alert.res', { right, wrong: test.length - right }));
  };
  return (
    <>
      <StackScreen title={t('info.test.title')} />
      <ScrollView
        contentContainerStyle={{
          marginVertical: 20,
          paddingLeft: 20,
          paddingRight: 10,
          paddingBottom: 30,
          gap: 10,
          backgroundColor: 'white',
        }}>
        {test.map(({ question, answers, correct_answer }, idx) => (
          <View style={{ gap: 10 }} key={idx}>
            <Text style={{ fontFamily: 'Rubik_400Regular', fontSize: 18 }}>{question}</Text>
            <RadioButtonsGroup
              values={answers}
              onSelect={(value) => {
                setAnswers({ ...answersState, [idx]: value });
              }}
            />
          </View>
        ))}
        <View />
        <TouchableOpacity
          onPress={checkTest}
          style={{
            marginBottom: 30,
            width: '100%',
            backgroundColor: '#24c7c7',
            paddingVertical: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Rubik_400Regular',
              fontSize: 18,
              color: 'white',
            }}>
            {t('info.test.checkButton')}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
