<template>
  <nuxt-link
    v-if="contryCode !== $i18n.locale"
    :to="switchLocalePath(contryCode)"
    class="flex p-1 hover:bg-blueGray-300 dark:hover:bg-blueGray-400"
  >
    <Flag :country-code="contryCode" :size="24" class="pr-2" />
    {{ title }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    contryCode: {
      type: String,
      default: 'es',
    },
    title: {
      type: String,
      default: 'Español',
    },
  },
}
</script>
