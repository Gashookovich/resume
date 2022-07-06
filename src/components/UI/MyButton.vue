<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
}
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: #7B68EE;
  border: 2px solid #7B68EE;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 2px 2px 4px gray;
}
.btn:hover {
  background-color: #FFFF00;
  color: #4B0082;
  border: 2px solid #4B0082;
}
</style>