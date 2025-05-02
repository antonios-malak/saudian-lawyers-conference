import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', {
  state: () => ({
    isLoading: false,
    loadingText: "",
  }),
  actions: {
    startLoading() {
      this.isLoading = true
      this.loadingText = 'جاري التحميل'
    },
    stopLoading() {
      this.isLoading = false
    }
  }
})