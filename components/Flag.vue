<template>
  <img :src="`https://www.countryflags.io/${countryCode}/flat/${size}.png`" />
</template>

<script>
export default {
  props: {
    countryCode: {
      type: String,
      default: 'es',
      // Validation
    },
    size: {
      type: Number,
      default: 16,
      // Validation
    },
  },
}
</script>
