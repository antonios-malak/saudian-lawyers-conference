import { useNuxtApp } from '#app'

interface ContactData {
    [key: string]: any;
}

export const homeService = {
    async getFaqs() {
        const { $axios } = useNuxtApp()
        return await $axios.get('/faqs')
    },

    async submitContact(data: ContactData) {
        const { $axios } = useNuxtApp()
        return await $axios.post('/contact-us', data)
    },
    async getSettingData() {
        const { $axios } = useNuxtApp()
        return await $axios.get('/settings')
    },
}