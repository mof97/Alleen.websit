import ar from '@/locales/ar.json'
import en from '@/locales/en.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: localStorage.getItem("isnad-site-lang") || 'en',
    messages: {
        en: en,
        ar: ar
    }
}))
