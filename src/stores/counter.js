import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAnimeStore = defineStore('anime', () => {
  const isDeskAppear = ref(false);
  const isReady = ref(false);
  const isGsap = window.innerWidth > 1024 ? true : false;

  return { isDeskAppear, isGsap, isReady }
})
