import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '~/components/Select';
const values = [
  { lang: 'ru', label: 'Русский' },
  { lang: 'en', label: 'English' },
  { lang: 'kz', label: 'Қазақша' },
];
const label = { ru: 'Русский', en: 'English', kz: 'Қазақша' };
export const LangPicker = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem('language');
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    };
    loadLanguage();
  }, [i18n]);
  const changeLang = async (lang: string) => {
    await AsyncStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
  };
  return (
    <Select
      onSelect={changeLang}
      label={label[i18n.language as keyof typeof label]}
      values={values}
    />
  );
};
