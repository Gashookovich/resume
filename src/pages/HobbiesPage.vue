<template>
  <div class="hobbies">
    <h1>Дополнительная информация</h1>
    <div class="hobbies__content">
      <div class="content">
        Конкретно разработкой фронта я заинтересовался весной 2021 года. Начал изучать всё сам с нуля
        с помощью оффлайн курсов и различной литературы. Очень затянуло меня это дело и по сей день стараюсь
        узнавать что-то новое и качать скилл.<br>
        Я счастливо женат, у нас есть пёс по кличке Марвел.
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hobbies {
  color: #4B0082;
  font-family: URW Chancery L, cursive;
}
.hobbies__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
}
.content {
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.5;
  border: 1px solid #4B0082;
  border-radius: 10px;
  padding: 5px 5px;
  margin-top: 10px;
  text-align: center;
  color: #2F4F4F;
  background-color: #FFE4B5;
}
</style>