<template>
  <div class="aducation">
    <h1>Образование</h1>
    <div class="aducation__select">
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <cards-aducation-list
        :cards="cards"
    />
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
import MySelect from "@/components/UI/MySelect";
import CardsAducationList from "@/components/CardsAducationList";

export default {
  components: {
    CardsAducationList,
    MySelect,
  },
  data() {
    return {
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      cards: [
        {
          id: 1,
          aducation: 'Высшее',
          organization: 'Казанский Государственный Энергетический Университет',
          specialization: 'Электроснабжение промышленных предприятий',
          year: '2009-2014',
        },
        {
          id: 2,
          aducation: 'Курс повышения квалификации',
          organization: 'Общество изобретателей и рационализаторов Республики Татарстан',
          specialization: 'Патентоведение',
          year: '2020',
        },
        {
          id: 3,
          aducation: 'Оффлайн курс',
          organization: 'BE ON MAX',
          specialization: 'Основы HTML5 и CSS3',
          year: '2021',
        },
        {
          id: 4,
          aducation: 'Оффлайн курс',
          organization: 'ITDVN',
          specialization: 'JavaScript starter',
          year: '2021',
        },
        {
          id: 5,
          aducation: 'Оффлайн курс',
          organization: 'Cyber Bionic Systematic',
          specialization: 'JavaScript: Базовый курс',
          year: '2021',
        },
        {
          id: 6,
          aducation: 'Оффлайн курс',
          organization: 'Cyber Bionic Systematic',
          specialization: 'JavaScript: Продвинутый курс',
          year: '2021',
        },
        {
          id: 7,
          aducation: 'Онлайн курс переквалификации',
          organization: 'Университет Иннополис',
          specialization: 'Основы frontend разработки',
          year: '2021-2022',
        },
      ],
      selectedSort: '',
      sortOptions: [
        {value: 'aducation', name: 'Уровень образования'},
        {value: 'organization', name: 'Название учебного заведения'},
        {value: 'specialization', name: 'Специализация'},
      ]
    }
  },
  computed: {
    sortedCards() {
      return [...this.cards].sort((card1, card2) => card1[this.selectedSort]?.localeCompare(card2[this.selectedSort]))
    },
  }
}
</script>

<style scoped>
.aducation {
  color: #4B0082;
  font-family: URW Chancery L, cursive;
}
.aducation__select {
  display: flex;
  justify-content: flex-end;
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