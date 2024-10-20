<template>
  <div id="navbar" :class="bg_active ? 'bg-active':''" class="fixed bg-[#17254E] lg:bg-transparent duration-300 w-full z-50 top-0">
    <div class="main-navbar py-3">
      <div class="container flex-col md:flex-row flex items-center justify-between">
        <div class="flex-col lg:flex-row flex items-start lg:items-center gap-x-3 lg:gap-10 w-full lg:w-auto">
          <div
              class="flex items-center text-white justify-between w-full lg:w-auto "
              data-aos="fade-right">
                <img class="w-28"  src="@/assets/img/logo-svg.svg">
                <div class="controller flex lg:hidden items-center gap-5 md:flex" data-aos="fade-left">
                  <Icon class="text-white text-3xl cursor-pointer" @click="is_active = !is_active" v-if="is_active" name="line-md:close-small"/>
                  <Icon class="text-white text-3xl cursor-pointer" @click="is_active = !is_active" v-else name="line-md:close-to-menu-alt-transition"/>
                </div>
          </div>
          <ul :class="is_active ? 'active':''"
              class="navbar-list">
            <li @click="is_active = false" data-aos="fade-up" data-aos-delay="200">
              <NuxtLink  class="duration-300" to="/">{{ $t('navbar.home') }}</NuxtLink>
            </li>
            <li @click="is_active = false" data-aos="fade-up" data-aos-delay="300">
              <NuxtLink class="duration-400" to="/#about">{{ $t('navbar.about') }}</NuxtLink>
            </li>
            <li @click="is_active = false" data-aos="fade-up" data-aos-delay="500">
              <NuxtLink to="/#services">{{ $t('navbar.services') }}</NuxtLink>
            </li>

            <li @click="is_active = false" data-aos="fade-up" data-aos-delay="650">
              <NuxtLink  to="/#partners">{{ $t('navbar.partners') }}</NuxtLink>
            </li>
            <li @click="is_active = false" data-aos="fade-up" data-aos-delay="750">
              <NuxtLink  to="/#contact">{{ $t('navbar.contact') }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="controller hidden lg:block text-white" data-aos="fade-left">
          <span data-aos="fade-left">For More Info</span>
          <a data-aos="fade-left" data-aos-duration="100" href="tel:+9647906974762" class="text-xl block">07906974762</a>
       </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const is_active = ref(false)
const bg_active = ref(false)
const $i18n = useI18n()
const changeLang = () => {
  if($i18n.locale.value === 'ar'){
    $i18n.locale.value = "en"
  }else {
    $i18n.locale.value = "ar"
  }

  localStorage.setItem("isnad-site-lang", $i18n.locale.value)
}


onMounted(() => {

  document.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      bg_active.value = true
    } else {
      bg_active.value = false
    }
  })

})
</script>
<style>

.bg-active {
  background-color: #17254E;
}

.navbar-list {
  @apply max-h-0 lg:max-h-[1000px]  duration-700 ease-linear overflow-hidden lg:overflow-visible flex items-start w-full lg:w-auto lg:items-center flex-col lg:flex-row gap-0 lg:gap-8 text-white ;
}

.navbar-list ul {
  @apply w-full lg:w-auto
}

.navbar-list li {
  @apply w-full lg:w-auto hover:text-golden duration-700
}

.navbar-list li a {
  @apply w-full py-5 inline-block
}

.navbar-list li:not(:last-of-type) {
  @apply border-b-[1px] lg:border-0 hover:border-golden duration-500
}

.navbar-list.active {
  @apply max-h-[1000px] md:max-h-[1000px] pt-5 lg:pt-0 ;
}

</style>
