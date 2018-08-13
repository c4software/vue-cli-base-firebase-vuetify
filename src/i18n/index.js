import VueI18n from 'vue-i18n'
import Vue from 'vue'
import fr from "./fr";
import en from "./en";
Vue.use(VueI18n);

const messages = {
  en: en,
  fr: fr
};

export const i18n = new VueI18n({
  locale: getLanguage(),
  fallbackLocale: 'fr',
  messages
});

function getLanguage () {
  try {
    let l = navigator.language.split('-');
    return l[0]
  } catch (err) {
    console.log(err);
    return navigator.language
  }
}
