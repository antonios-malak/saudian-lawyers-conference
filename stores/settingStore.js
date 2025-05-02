import { defineStore } from 'pinia'
import { homeService } from '~/services/home'
import { useLoadingStore } from '~/stores/loadingStore';

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    headerContent: [],
    aboutContent: [],
    footerContent: []
  }),
  actions: {
    async getSettingData() {
      try {
        const loadingStore = useLoadingStore();
        loadingStore.startLoading(); 
        const res = await homeService.getSettingData();
        const data = res.data || [];
        data.forEach((item) => {
          if (item?.key?.includes('header')) {
            this.headerContent.push(item);
          } else if (item?.key?.includes('section_1')) {
            this.aboutContent.push(item);
          } else if (item?.key) {
            this.footerContent.push(item);
          }
        });
      } catch (error) {
        console.error('Failed to fetch settings:', error);
        throw new Error('Failed to load settings');
      } finally {
        useLoadingStore().stopLoading(); 
      }
    }
  }
})