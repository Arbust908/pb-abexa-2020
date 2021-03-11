<template>
  <div
    :id="`bit-dd-${id}`"
    v-outside-click="{
      exclude: ['outside-click-exclude'],
      handler: closeShow,
    }"
    class="relative inline-block"
  >
    <button :class="btnClasses" @click="toggleShow">
      <slot name="btn" :isOpened="showOptions" />
    </button>
    <transition
      enter-active-class="transition-all duration-150 transform ease-out"
      enter-class="scale-0 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition-all duration-300 transform ease-in "
      leave-class="scale-100 opacity-100 "
      leave-to-class="scale-0 opacity-0"
    >
      <ul
        v-if="showOptions"
        class="dark:bg-blueGray-500 dark:text-white"
        @click="closeShow"
      >
        <slot name="options" />
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    btnClasses: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showOptions: false,
    }
  },
  methods: {
    emitValue(value) {
      this.showOptions = false
      this.$emit('change', value)
    },
    toggleShow() {
      this.showOptions = !this.showOptions
    },
    closeShow() {
      this.showOptions = false
    },
  },
}
</script>

<style scoped>
ul {
  min-width: 160px;
  z-index: 2;
  @apply absolute top-0 right-0 mt-10 rounded border bg-white text-main-500 shadow origin-top-right;
}
</style>
