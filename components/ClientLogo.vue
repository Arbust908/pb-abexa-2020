<template>
  <picture class="h-40">
    <img class="object-contain w-full h-full" :src="imgSrc" alt="" />
  </picture>
</template>

<script>
export default {
  props: {
    clientLogo: {
      type: String,
      required: true,
    },
  },
  computed: {
    imgSrc() {
      return require(`@/assets/img/${this.clientLogo}`)
    },
  },
}
</script>
