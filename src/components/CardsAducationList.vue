<template>
  <div>
    <transition-group name="cards-list">
      <cards-aducation-item
          v-for="card in cards"
          :key="card.id"
          :card="card"
      />
    </transition-group>
  </div>
</template>

<script>
import CardsAducationItem from "@/components/CardsAducationItem";

export default {
  name: 'cards-aducation-list',
  components: {
    CardsAducationItem
  },
  props: {
    cards: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.cards-list-item {
  display: inline-block;
  margin-right: 10px;
}
.cards-list-enter-active,
.cards-list-leave-active {
  transition: all 0.4s ease;
}
.cards-list-enter-from,
.cards-list-leave-to {
  opacity: 0;
  transform: translateY(130px);
}
.cards-list-move {
  transition: transform 0.4s ease;
}
</style>