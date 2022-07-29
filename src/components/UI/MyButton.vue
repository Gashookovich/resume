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
@media screen and (max-width: 1440px) and (min-width: 960px) {

}
@media screen and (max-width: 960px) and (min-width: 640px) {

}
@media screen and (max-width: 640px) and (min-width: 480px) {

}
@media screen and (max-width: 640px) and (min-width: 480px) {

}
.btn {
  padding: 10px 15px;
  background: none;
  color: #7B68EE;
  border: 2px solid #7B68EE;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 2px 2px 4px gray;
  font-family: Georgia, serif;
}
.btn:hover {
  background-color: #FFFF00;
  color: #4B0082;
  border: 2px solid #4B0082;
}
</style>