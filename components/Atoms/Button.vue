<!-- @format -->

<template>
  <button :class="`btn ${buttonType}`" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonType: {
      type: String,
      default: "primary", // default class name
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

<style scoped>
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.btn.primary {
  background-color: blue;
  color: white;
}
.btn.secondary {
  background-color: gray;
  color: white;
}
</style>
