<template>
  <div
    class="font-text bg-white dark:bg-blueGray-900 text-main-500 dark:text-main-100 grid grid-layout min-h-screen overflow-hidden"
  >
    <header
      id="top"
      class="flex flex-row justify-between items-center p-2 w-full bg-blueGray-200 dark:bg-blueGray-800 z-50 relative"
    >
      <LogoLink />
      <NavMenuDesk v-if="$mq !== 'sm'" />
      <NavMenuMobile v-else class="absolute top-0 right-0 mt-4 p-8" />
      <button
        v-if="$mq === 'sm'"
        class="w-12 h-12 text-2xl"
        @click="toggleMenu"
      >
        <font-awesome-icon icon="bars" />
      </button>
    </header>
    <Nuxt class="z-20" />
    <footer
      class="bg-blueGray-200 dark:bg-blueGray-800 flex flex-col items-center justify-between text-sm"
    >
      <span class="pt-1">
        contecto via mail
        <a
          class="transform transition duration-150 inline-block hover:opacity-75 hover:scale-105 hover:translate-x-1"
          href="mailto:info@abexa.com"
        >
          info@abexa.com
        </a>
      </span>
      <div
        class="w-full h-1 bg-gradient-to-r from-main-700 via-main-500 to-main-700"
      />
      <a class="back-to-top" href="#top">
        <font-awesome-icon
          icon="arrow-to-top"
          class="text-white"
          focusable="true"
        />
      </a>
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      openMenu: false,
    }
  },
  methods: {
    ...mapActions({
      toggleMenu: 'toggleMobileMenu',
    }),
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}
</style>
<style scoped>
.grid-layout {
  grid-template-rows: 60px 1fr 40px;
}
.back-to-top {
  @apply fixed bottom-0 right-0 w-8 h-8 flex justify-center items-center m-6 rounded-full bg-main-600 transform transition duration-150 ease-out cursor-pointer z-40 border-2 border-white border-opacity-75;
}
@media (pointer: fine) {
  .back-to-top:hover {
    @apply scale-110 shadow bg-main-500 border-0;
  }
}
@media screen and (min-width: 768px) {
  .grid-layout {
    grid-template-rows: 52px 1fr 32px;
  }
}
</style>
