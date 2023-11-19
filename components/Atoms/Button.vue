<!-- @format -->

<template>
  <button
    :class="`btn ${type}`"
    class="py-3 px-5 border-none rounded transition-colors"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
  emits: ["click"],
  methods: {
    onClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<style scoped lang="scss">
.btn.primary {
  @apply bg-blue-500 text-white hover:bg-blue-600;
}
.btn.secondary {
  @apply border-2 border-solid border-blue-500 text-blue-500 hover:bg-blue-600 hover:border-blue-600 hover:text-white;
}
</style>
