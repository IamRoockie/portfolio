import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import EN from '@/stores/en.json'
import RU from '@/stores/ru.json'

export const useLocale = defineStore('locale', () => {
  const lang = ref(localStorage.getItem('lang') || 'en')
  const locale = computed(() => {
    switch (lang.value) {
      case 'en':
        return EN
      case 'ru':
        return RU
    }
  })

  function setLang(l) {
    lang.value = l
    localStorage.setItem('lang', l)
  }

  return { lang, locale, setLang }
})
