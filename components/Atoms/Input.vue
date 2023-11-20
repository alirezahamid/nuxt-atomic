<!-- @format -->

<template>
  <input
    :type="inputType"
    :name="inputName"
    :placeholder="inputPlaceholder"
    :value="modelValue"
    @input="updateValue($event.target.value)"
    class="input"
  />
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const inputType = props.type;
const inputName = props.name;
const inputPlaceholder = props.placeholder;

const emit = defineEmits(["update:modelValue"]);
const updateValue = (value) => {
  emit("update:modelValue", value);
};
</script>

<style scoped>
.input {
  display: block;
  border: 1px solid #d3d3d3;
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
}
</style>
