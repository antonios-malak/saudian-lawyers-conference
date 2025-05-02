import { ref } from 'vue'

export const useInitialLoad = () => {
  const isInitialLoadComplete = ref(false)

  return {
    isInitialLoadComplete
  }
}