<template>
  <div class="hobbies">
    <h1>Дополнительная информация</h1>
    <div class="hobbies__content">
      <div class="hobbies__content-head">
        Конкретно разработкой фронта я заинтересовался весной 2021 года. Начал изучать всё сам с нуля
        с помощью оффлайн курсов и различной литературы. Очень затянуло меня это дело и по сей день стараюсь
        узнавать что-то новое и качать скилл. Английский Pre-Intermediate.
      </div>
    </div>
    <div class="hobbies__content-body">
      <img class="hobbies__content-body-image" :src="image2"/>
      <div class="hobbies__content-body-text">Я счастливо женат</div>
      <img class="hobbies__content-body-image" :src="image4"/>
      <div class="hobbies__content-body-text">У нас есть пёс по кличке Марвел</div>
    </div>
    <div class="hobbies__content-body">
      <img class="hobbies__content-body-image" :src="image1"/>
      <div class="hobbies__content-body-text">Любим классно проводить время вместе</div>
      <img class="hobbies__content-body-image" :src="image3"/>
      <div class="hobbies__content-body-text">Очень любим путешествовать! Много где побывали</div>
    </div>
    <div class="hobbies__content">
      <div class="hobbies__content-footer">
        Также one love хип-хоп и всё что с ним связано. Играю в баскетбол и волейбол, катаюсь на скейте и bmx.
        Люблю много гулять. Очень положительно отношусь к выездам на природу с палатками, сколько лет подряд ездил
        на сплав. В общем и целом не особо люблю сидеть на месте. Мир!
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/img/we.png";
import image2 from "@/img/we2.png";
import image3 from "@/img/we3.png";
import image4 from "@/img/marvel.png";


export default {
  data: function () {
    return {
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
    }
  }
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
.hobbies__content-head {
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  border: 1px solid #4B0082;
  border-radius: 10px;
  padding: 5px 5px;
  margin-top: 10px;
  text-align: center;
  color: #2F4F4F;
  background-color: #FFE4B5;
}
.hobbies__content-body {
  width: 80%;
  margin: 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.hobbies__content-body-image {
  width: 100%;
  height: 600px;
  margin-left: 5%;
  border: 1px solid #4B0082;
  border-radius: 10px;
}
.hobbies__content-body-text {
  width: 100%;
  position: relative;
  top: 50%;
  padding: 5px 5px;
  border: 1px solid #4B0082;
  border-radius: 10px;
  margin-left: 2%;
  color: #2F4F4F;
  background-color: #FFE4B5;
}
.hobbies__content-footer {
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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