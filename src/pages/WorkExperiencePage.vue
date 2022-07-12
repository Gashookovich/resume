<template>
  <div class="work">
    <h1>Опыт работы</h1>
    <div class="work__content">
      <div class="work__content-compound">
        <div><strong>Организация:</strong>АО "Татэлектромонтаж"</div>
        <div><strong>Должность:</strong>Инженер-наладчик</div>
        <div><strong>Начало работы:</strong>Сентябрь 2014</div>
        <div><strong>Окончание:</strong>Декабрь 2020</div>
        <div><strong>Обязанности:</strong>Проверка, наладка и пуск электрооборудования 0,4-6кВ. Подготовка технических отчётов о проделанной работе.</div>
      </div>
      <div class="work__content-compound">
        <div><strong>Организация:</strong>АО "Татэлектромонтаж"</div>
        <div><strong>Должность:</strong>Инженер-технолог</div>
        <div><strong>Начало работы:</strong>Декабрь 2020</div>
        <div><strong>Окончание:</strong>Июль 2021</div>
        <div><strong>Обязанности:</strong>Работа с нормативной документацией. Составление технологических карт пуско-наладочных
                                          работ. Мониторинг и проверка нового электрооборудования на рынке.</div>
      </div>
      <div class="work__content-compound">
        <div><strong>Организация:</strong>ICL-КПО ВС</div>
        <div><strong>Должность:</strong>Стажер-разработчик</div>
        <div><strong>Начало работы:</strong>Март 2022</div>
        <div><strong>Окончание:</strong>Июнь 2022</div>
        <div><strong>Обязанности:</strong>Участие в командной разработке сайта-приложения на фреймворке Vue. Моей задачей
                                          была разработка компонента таблицы логов с рендерингом определённого количества
                                          логов, фильтрацией столбцов таблицы, поиском по столбцу при клике на любую ячейку.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.work {
  color: #4B0082;
  font-family: URW Chancery L, cursive;
}
.work__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
}
.work__content-compound {
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
</style>