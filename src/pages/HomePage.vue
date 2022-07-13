<template>
  <div>
    <div class="home-page">
      <img :src="image"/>
      <div class="home-page__content">
        <h1>Приветствую на моей визитке!</h1>
        <div class="content">
          Меня зовут <strong>Аржанов Вадим</strong>, мне 30 лет. Я родился и живу в городе Казани, Республики
          Татарстан. Ответственный, энергичный, целеустремлённый, коммуникабельный и просто хороший человек. Не боюсь работы
          и всегда рад научиться чему-то новому. Здесь вы можете ознакомиться с <strong>информацией обо мне
          и моём опыте работы</strong>. На данный момент являюсь frontend-разработчиком. <strong>Стэк</strong>: html, css, JavaScript,
          TypeScript, React, Redux, Vue, Vuex, Node.js, работа с git, понимание принципов ООП и
          методологии БЭМ.
        </div>
      </div>
      <div class="home-page__btns">
        <my-button @click="$router.push('/aducation')">Образование</my-button>
        <my-button @click="$router.push('/experience')" style="margin-top: 80px;">Опыт работы</my-button>
        <my-button @click="$router.push('/hobbies')" style="margin-top: 80px;">Доп. информация</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import image from "@/img/myPhoto3.png";
import MyButton from "@/components/UI/MyButton";

export default {
  components: {
    MyButton,
  },
  data() {
    return {
      image: image,
    }
  },
}
</script>

<style scoped>
img {
  height: 100%;
  width: 25%;
  padding-top: 15px;
  border-radius: 120px;
}
.home-page {
  display: flex;
  justify-content: space-around;
  color: #4B0082;
}
.home-page__content {
  display: flex;
  flex-direction: column;
}
h1 {
  position: relative;
  top: 0;
  font-family: Georgia, serif;
}
.content {
  position: relative;
  top: 7%;
  line-height: 2;
  margin: 0 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: Georgia, serif;
  font-size: 19px;
}
.home-page__btns {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 120px;
}
</style>