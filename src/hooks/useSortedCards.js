import {ref, computed} from "vue";

export default function useSortedCards(cards) {
    const selectedSort = ref('')
    const sortedCards = computed(() => {
        return [...cards.value].sort((card1, card2) => card1[selectedSort.value]?.localeCompare(card2[selectedSort.value]))
    })

    return {
        selectedSort, sortedCards
    }
}