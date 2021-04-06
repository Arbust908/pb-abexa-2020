<template>
  <nav class="flex space-x-3 items-center justify-between mr-4">
    <ModeToggler class="flex w-8 h-8 items-center justify-center" />
    <nuxt-link to="/casos">Casos</nuxt-link>
    <nuxt-link to="/nosotros">Nosotros</nuxt-link>
    <nuxt-link to="/contactos">Contactos</nuxt-link>
    <LanguageChanger />
  </nav>
</template>
