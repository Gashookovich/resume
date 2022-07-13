<template>
  <div>
    <cards-work-item
        v-for="work in works"
        :key="work.id"
        :work="work"
    />
  </div>
</template>

<script>
import CardsWorkItem from "@/components/CardsWorkItem";

export default {
  name: 'cards-work-list',
  components: {
    CardsWorkItem,
  },
  props: {
    works: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>