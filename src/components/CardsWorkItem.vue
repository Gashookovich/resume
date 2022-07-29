<template>
  <div>
    <div class="work__content">
      <div class="work__content-compound">
        <div><strong>Организация:</strong>{{ work.company }}</div>
        <div><strong>Должность:</strong>{{ work.jobTitle }}</div>
        <div><strong>Начало работы:</strong>{{ work.start }}</div>
        <div><strong>Окончание:</strong>{{ work.end }}</div>
        <div><strong>Обязанности:</strong>{{ work.responsibilities }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cards-work-item',
  props: {
    work: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 1440px) and (min-width: 960px) {
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
}
@media screen and (max-width: 960px) and (min-width: 640px) {
  .work__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
  }
  .work__content-compound {
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
  .work__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
  }
  .work__content-compound {
    width: 70%;
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
  .work__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
  }
  .work__content-compound {
    width: 85%;
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