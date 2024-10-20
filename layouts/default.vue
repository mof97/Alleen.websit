<template>
  <div id="default-layout" class="overflow-hidden" :class="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <Navbar />
    <slot />
    <Footer class="mb-[75px]" />
    <Fluting />
  </div>
</template>
