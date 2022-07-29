<template>
  <div>
    <div class="home-page">
      <img :src="image"/>
      <div class="home-page__content">
        <h1>Приветствую на моей визитке!</h1>
        <div class="content">
          Меня зовут <strong>Аржанов Вадим</strong>, мне 30 лет. Я родился и живу в городе Казань, Республика
          Татарстан. Ответственный, энергичный, целеустремлённый, коммуникабельный и просто хороший человек. Не боюсь работы
          и всегда рад научиться чему-то новому. Здесь вы можете ознакомиться с <strong>информацией обо мне
          и моём опыте работы</strong>. На данный момент являюсь frontend-разработчиком. <strong>Стэк</strong>: html, css, JavaScript,
          TypeScript, React, Redux, Vue, Vuex, Node.js, работа с git, понимание принципов ООП и
          методологии БЭМ.
        </div>
      </div>
      <div class="home-page__btns">
        <my-button @click="$router.push('/aducation')" class="home-page__btns-btn1">Образование</my-button>
        <my-button @click="$router.push('/experience')" class="home-page__btns-btn2">Опыт работы</my-button>
        <my-button @click="$router.push('/hobbies')" class="home-page__btns-btn3">Доп. информация</my-button>
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
@media screen and (max-width: 1440px) and (min-width: 960px) {
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
    padding-bottom: 10%;
    font-family: Georgia, serif;
    font-size: 19px;
  }
  .home-page__btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 120px;
    margin-top: 80px;
  }
  .home-page__btns-btn2, .home-page__btns-btn3 {
    margin-top: 80px;
  }
}
@media screen and (max-width: 960px) and (min-width: 640px) {
  img {
    width: 60%;
    border-radius: 120px;
  }
  .home-page {
    display: flex;
    flex-direction: column;
    justify-content: end;
    color: #4B0082;
    align-items: center;
  }
  .home-page__content {
    display: flex;
    flex-direction: column;
  }
  h1 {
    position: relative;
    top: 10px;
    font-family: Georgia, serif;
    font-size: 30px;
  }
  .content {
    position: relative;
    top: 15px;
    line-height: 2;
    margin: 0 10px;
    padding-top: 5px;
    padding-bottom: 10%;
    font-family: Georgia, serif;
    font-size: 18px;
  }
  .home-page__btns {
    display: flex;
   justify-content: space-around;
    align-items: center;
  }
  .home-page__btns-btn2, .home-page__btns-btn3 {
    margin-left: 100px;
  }
}
@media screen and (max-width: 640px) and (min-width: 480px) {
  img {
    width: 80%;
    border-radius: 120px;
  }
  .home-page {
    display: flex;
    flex-direction: column;
    justify-content: end;
    color: #4B0082;
    align-items: center;
  }
  .home-page__content {
    display: flex;
    flex-direction: column;
  }
  h1 {
    position: relative;
    top: 10px;
    font-family: Georgia, serif;
    font-size: 27px;
  }
  .content {
    position: relative;
    top: 15px;
    line-height: 2;
    margin: 0 10px;
    padding-top: 5px;
    padding-bottom: 10%;
    font-family: Georgia, serif;
    font-size: 18px;
  }
  .home-page__btns {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .home-page__btns-btn2, .home-page__btns-btn3 {
    margin-left: 15px;
  }
}
@media screen and (max-width: 480px) and (min-width: 320px) {
  img {
    width: 90%;
    border-radius: 120px;
  }
  .home-page {
    display: flex;
    flex-direction: column;
    justify-content: end;
    color: #4B0082;
    align-items: center;
  }
  .home-page__content {
    display: flex;
    flex-direction: column;
  }
  h1 {
    position: relative;
    top: 10px;
    font-family: Georgia, serif;
    font-size: 25px;
  }
  .content {
    position: relative;
    top: 15px;
    line-height: 2;
    margin: 0 10px;
    padding-top: 5px;
    padding-bottom: 10%;
    font-family: Georgia, serif;
    font-size: 18px;
  }
  .home-page__btns {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .home-page__btns-btn1 {
    height: 50px;
  }
  .home-page__btns-btn2, .home-page__btns-btn3 {
    margin-left: 15px;
    height: 50px;
  }
}
</style>