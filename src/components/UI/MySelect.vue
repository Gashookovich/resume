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
@media screen and (max-width: 1440px) and (min-width: 960px) {
  select {
    width: 22%;
    background-color: #FFE4B5;
    font-family: Georgia, serif;
    color: #4B0082;
    border: 2px solid #4B0082;
    border-radius: 10px;
    cursor: pointer;
  }
}
@media screen and (max-width: 960px) and (min-width: 640px) {
  select {
    width: 28%;
    background-color: #FFE4B5;
    font-family: Georgia, serif;
    color: #4B0082;
    border: 2px solid #4B0082;
    border-radius: 10px;
    cursor: pointer;
  }
}
@media screen and (max-width: 640px) and (min-width: 480px) {
  select {
    width: 40%;
    background-color: #FFE4B5;
    font-family: Georgia, serif;
    color: #4B0082;
    border: 2px solid #4B0082;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 15px;
  }
}
@media screen and (max-width: 480px) and (min-width: 320px) {
  select {
    width: 50%;
    background-color: #FFE4B5;
    font-family: Georgia, serif;
    color: #4B0082;
    border: 2px solid #4B0082;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 15px;
  }
}
</style>