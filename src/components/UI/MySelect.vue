<template>
  <select :value="modelValue" @change="changeOption">
    <option disabled value="">Выберете из списка</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
select {
  width: 22%;
  background-color: #FFFFE0;
  font-family: URW Chancery L, cursive;
  color: #4B0082;
  border: 2px solid #4B0082;
  border-radius: 10px;
  cursor: pointer;
}
</style>