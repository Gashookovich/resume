<template>
  <div>
    <div class="aducation__content">
      <div class="aducation__content-compound">
        <div><strong>Уровень образования:</strong>{{ card.aducation }}</div>
        <div><strong>Название учебного заведения:</strong>{{ card.organization }}</div>
        <div><strong>Специализация:</strong>{{ card.specialization }}</div>
        <div><strong>Годы обучения:</strong>{{ card.year }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cards-aducation-item',
  props: {
    card: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 1440px) and (min-width: 960px) {
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
}
@media screen and (max-width: 960px) and (min-width: 640px) {
  .aducation__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
  }
  .aducation__content-compound {
    width: 60%;
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
}
@media screen and (max-width: 640px) and (min-width: 480px) {
  .aducation__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
  }
  .aducation__content-compound {
    width: 75%;
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
}
@media screen and (max-width: 480px) and (min-width: 320px) {
  .aducation__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
  }
  .aducation__content-compound {
    width: 95%;
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
}
</style>