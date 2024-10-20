// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr:false,
  app:{
    head:{
      title: 'AL-Leen CO | Travel & Tourism LTD',
      link:[
        { rel: 'icon', type: 'image/png', href: './meta_img.png' },
        {rel:"preconnect" , href:"https://fonts.googleapis.com"},
        {rel:"preconnect" , href:"https://fonts.googleapis.com" , crossorigin:'anonymous'},
        {
          rel:"preconnect" , href:"https://fonts.gstatic.com",href:"https://fonts.googleapis.com/css2?family=Marcellus&display=swap"
        }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'title', content: 'Isnad Real State' },
        { name: 'og:type', content: 'website' },
        { name: 'og:image', content: '/meta_img.png' },
        { name: 'og:image:width', content: '800' },
        { name: 'og:image:height', content: '800' },
        { name: 'og:site_name', content: 'Website' },
        { hid: 'description', name: 'description', content: 'Isnad Company was established to provide an effective solution for both investors and individuals wishing to purchase, as it acts as an intermediary between owners of investment projects and customers wishing to own housing units in those projects.' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
    }
  },
  css:['animate.css'],
  modules: ['@nuxtjs/tailwindcss', "@nuxt/icon", "nuxt-aos",'@nuxtjs/i18n'],
  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  },
  tailwindcss: {
    cssPath: ['~/assets/styles/main.css', { injectPosition: "first" }],
    exposeConfig: {
      level: 2
    },
    config: {
      theme:{
        container:{
          center:true,
          padding:"1rem"
        },
        extend:{
          colors :{
            main:"#00BC71",
            golden:"#D7AF5C",
            secondary:"#FFB443",
          }
        }
      }
    },
    viewer: true,
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  }
})
