<template>
  <article>
    <h4>
      <span>
        {{ title }}
      </span>
      <IconChevronDown
        :class="opened ? 'rotate-180' : 'rotate-0'"
        class="h-6 w-6 transition transform duration-150 ease-in-out"
      />
    </h4>
    <transition
      enter-active-class="transition-all duration-150 transform ease-out"
      enter-class="scale-y-0 opacity-0"
      enter-to-class="scale-y-100 opacity-100"
      leave-active-class="transition-all duration-300 transform ease-in "
      leave-class="scale-y-100 opacity-100 "
      leave-to-class="scale-y-0 opacity-0"
    >
      <p v-if="opened" v-html="description" />
    </transition>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Titulo',
    },
    description: {
      type: String,
      default: 'Descripcion',
    },
    opened: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
article {
  @apply rounded overflow-hidden cursor-pointer mb-1;
}
h4 {
  @apply w-full bg-main-600 text-white text-xl flex justify-between items-center p-4;
}
p {
  width: 65ch;
  @apply mx-auto p-4 origin-top;
}
p > br {
  @apply mb-2;
}
</style>
