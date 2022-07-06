<template>
  <div class="aducation">
    <h1>Образование</h1>
    <div class="aducation__content">
      <div class="aducation__content-compound">
        <div><strong>Уровень образования:</strong>Высшее</div>
        <div><strong>Название учебного заведения:</strong>Казанский Государственный Энергетический Университет</div>
        <div><strong>Факультет:</strong>Институт электроэнергетики (ИЭЭ)</div>
        <div><strong>Специализация:</strong>Электроснабжение промышленных предприятий</div>
        <div><strong>Годы обучения:</strong>2009-2014</div>
      </div>
      <div class="aducation__content-compound">
        <div><strong>Уровень образования:</strong>Курс повышения квалификации</div>
        <div><strong>Название учебного заведения:</strong>Общество изобретателей и рационализаторов Республики Татарстан</div>
        <div><strong>Специализация:</strong>Патентоведение</div>
        <div><strong>Год обучения:</strong>2020</div>
      </div>
      <div class="aducation__content-compound">
        <div><strong>Уровень образования:</strong>Оффлайн курс</div>
        <div><strong>Источник:</strong>BE ON MAX</div>
        <div><strong>Название:</strong>ОсновыHTML5 и CSS3</div>
        <div><strong>Год обучения:</strong>2021</div>
      </div>
      <div class="aducation__content-compound">
        <div><strong>Уровень образования:</strong>Оффлайн курс</div>
        <div><strong>Источник:</strong>ITDVN</div>
        <div><strong>Название:</strong>Java Script starter</div>
        <div><strong>Год обучения:</strong>2021</div>
      </div>
      <div class="aducation__content-compound">
        <div><strong>Уровень образования:</strong>Оффлайн курс</div>
        <div><strong>Источник:</strong>Cyber Bionic Systematic</div>
        <div><strong>Название:</strong>Java Script: Базовый курс</div>
        <div><strong>Год обучения:</strong>2021</div>
      </div>
      <div class="aducation__content-compound">
        <div><strong>Уровень образования:</strong>Оффлайн курс</div>
        <div><strong>Источник:</strong>Cyber Bionic Systematic</div>
        <div><strong>Название:</strong>Java Script: Продвинутый курс</div>
        <div><strong>Год обучения:</strong>2021</div>
      </div>
      <div class="aducation__content-compound">
        <div><strong>Уровень образования:</strong>Онлайн курс переквалификации</div>
        <div><strong>Название учебного заведения:</strong>Универсиет Иннополис</div>
        <div><strong>Специализация:</strong>Основы frontend разработки</div>
        <div><strong>Годы обучения:</strong>2021-2022</div>
      </div>
    </div>
    <div class="aducation__image">
      <img class="image" :src="image1"/>
      <img class="image" :src="image2"/>
    </div>
    <div class="aducation__image">
      <img class="image" :src="image3"/>
      <img class="image" :src="image4"/>
    </div>

  </div>
</template>

<script>
import image1 from "@/img/diplom0.png";
import image2 from "@/img/diplom1.png";
import image3 from "@/img/diplom2.png";
import image4 from "@/img/diplom3.png";

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
.aducation {
  color: #4B0082;
  font-family: URW Chancery L, cursive;
}
.aducation__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
}
.aducation__content-compound {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.5;
  border: 1px solid #4B0082;
  border-radius: 10px;
  padding: 5px 5px;
  margin-top: 10px;
  text-align: left;
  color: #2F4F4F;
  background-color: #FFE4B5;
}
.aducation__image {
  display: flex;
  flex-direction: row;
  margin: 5px 5px;
}
.image {
  width: 48%;
  margin: 5px 5px;
  border: 2px solid #4B0082;
}
</style>