import i18n from 'i18next';
import * as Localization from 'expo-localization';
import { initReactI18next } from 'react-i18next';
import ru from './locales/ru.json';
import en from './locales/en.json';
import kz from './locales/kz.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  kz: {
    translation: kz,
  },
};

const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem('lang');
  if (!savedLanguage) {
    savedLanguage = Localization.getLocales()[0].languageTag.slice(0, 2);
  }

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      compatibilityJSON: 'v3',
      lng: savedLanguage, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
      // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
      // if you're using a language detector, do not define the lng option
      fallbackLng: 'ru',
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });
};
initI18n();

export default i18n;
