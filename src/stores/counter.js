import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAnimeStore = defineStore('anime', () => {
  const isDeskAppear = ref(false)

  return { isDeskAppear }
})
