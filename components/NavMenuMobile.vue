<template>
  <nav
    :class="isOpened ? 'mr-4' : 'translate-x-full'"
    class="flex flex-col justify-between bg-blueGray-300 rounded text-2xl transition transform ease-out duration-150"
  >
    <button class="inline-block w-12 h-12 absolute top-0 right-0">
      <font-awesome-icon icon="times" />
    </button>
    <nuxt-link to="/casos">Casos</nuxt-link>
    <nuxt-link to="/nosotros">Nosotros</nuxt-link>
    <nuxt-link to="/contactos">Contactos</nuxt-link>
    <ModeToggler class="flex w-12 h-12 items-center justify-center" />
    <LanguageChanger />
  </nav>
</template>

<script>
export default {
  props: {
    isOpened: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
