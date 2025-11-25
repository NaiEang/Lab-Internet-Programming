import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: [],
    menu: [],
  }),
  getters: {
    // Get specific category list by group name
    getCategoriesByGroup: (state) => {
      return (groupName) => state.categories.filter((category) => category.group === groupName)
    },
    // Get specific products by group name
    getProductsByGroup: (state) => {
      return (groupName) => state.products.filter((product) => product.group === groupName)
    },
    // Get products belonging to a specific category ID
    getProductsByCategory: (state) => {
      return (categoryId) => state.products.filter((product) => product.categoryId === categoryId)
    },
    // Get popular products (sold > 10)
    getPopularProducts: (state) => {
      return state.products.filter((product) => product.countSold > 10)
    },
  },
  actions: {
    async fetchAllData() {
      try {
        // We use Promise.all to fetch everything at the same time for better performance
        const [catRes, promoRes, groupRes, prodRes] = await Promise.all([
          axios.get('http://localhost:3000/api/categories'),
          axios.get('http://localhost:3000/api/promotions'),
          axios.get('http://localhost:3000/api/groups'),
          axios.get('http://localhost:3000/api/products'),
        ])

        this.categories = catRes.data
        this.promotions = promoRes.data
        this.groups = groupRes.data
        this.products = prodRes.data

        console.log('Data loaded successfully')
      } catch (error) {
        console.error('Error loading data:', error)
      }
    },
  },
})
