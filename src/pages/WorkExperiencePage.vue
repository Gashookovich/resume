<template>
  <div class="work">
    <h1>Опыт работы</h1>
    <cards-work-list
        :works="works"
    />
  </div>
</template>

<script>
import CardsWorkList from "@/components/CardsWorkList";
export default {
  components: {
    CardsWorkList
  },
  data() {
    return {
      works: [
        {
          id: 1,
          company: 'ICL-КПО ВС',
          jobTitle: 'Стажер-разработчик',
          start: 'Март 2022',
          end: 'Июнь 2022',
          responsibilities: 'Участие в командной разработке сайта-приложения на фреймворке Vue. Моей' +
              ' задачей была разработка компонента таблицы логов с рендерингом определённого количества' +
              ' логов, фильтрацией столбцов таблицы, поиском по столбцу при клике на любую ячейку.',
        },
        {
          id: 2,
          company: 'АО Татэлектромонаж',
          jobTitle: 'Инженер-технолог',
          start: 'Декабрь 2020',
          end: 'Июль 2021',
          responsibilities: 'Работа с нормативной документацией. Составление ' +
              'технологических карт пуско-наладочных работ. Мониторинг и проверка' +
              ' нового электрооборудования на рынке.',
        },
        {
          id: 3,
          company: 'АО Татэлектромонаж',
          jobTitle: 'Инженер-наладчик',
          start: 'Сентябрь 2014',
          end: 'Декабрь 2020',
          responsibilities: 'Проверка, наладка и пуск электрооборудования 0,4-6кВ. ' +
                            'Подготовка технических отчётов о проделанной работе.',
        },


      ]
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 480px) and (min-width: 320px) {
  h1 {
    font-size: 30px;
  }
}
.work {
  color: #4B0082;
  font-family: Georgia, serif;
}

</style>