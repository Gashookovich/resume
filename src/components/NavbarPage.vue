<template>
  <div class="navbar">
    <div>Аржанов Вадим Александрович</div>
    <div class="navbar__btns">
      <my-button
          @click="$router.push('/')"
          style="background: none; color: #4B0082; border: 2px solid #4B0082;"
      >
        Главная
      </my-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: #FFE4B5;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-family: URW Chancery L, cursive;
  font-size: 20px;
  color: #4B0082;
}
.navbar__btns {
  margin-left: auto;
}
.navbar__btns:hover {
  background-color: #FFFF00;
  border-radius: 15px;
  color: #4B0082;
}
</style>