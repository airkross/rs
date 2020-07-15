import Vue from 'vue'
import Vuex from 'vuex'
import jsonDATA from '../assets/hotels.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: jsonDATA.hotels,
    postsData: jsonDATA.hotels,
    fetchData: {
      "country": null,
      "type": null,
      "stars": null,
      "count_from": null,
      "price": null
    }
  },
  mutations: {
    setData(state, data) {
      state.fetchData[data[1]] = data[0]
    },
    clearData(state){
      
      state.data = jsonDATA.hotels;
      state.postsData = jsonDATA.hotels;
    },
    fetchData(state, fetchData) {
      console.log(state.fetchData)
      let res = jsonDATA.hotels.filter(item => item.country == state.fetchData.country);
      res = res.filter(item => item.reviews_amount >= state.fetchData.count_from)
      res = res.filter(item => item.min_price <= state.fetchData.price)
      let flag = [];
      for (let item in res) {
        for (let item1 in state.fetchData.stars){
          if(res[item].stars == state.fetchData.stars[item1].star){
            flag.push(res[item])
            continue;
          }
        }
      }
      res = flag;
      let flag1 = [];
      for (let item in res) {
        for (let item1 in state.fetchData.type){
          if(res[item].type == state.fetchData.type[item1].name){
            flag1.push(res[item])
            continue;
          }
        }
      }
      res = flag1;
      state.postsData = res;
    }
  },
  actions: {},
  getters: {
    getFetchData(state) {
      return state.fetchData
    },
    getAllData(state) {
      return state.data
    },
    getPostsdata(state) {
      return state.postsData
    },
    getMaxPrice(state) {
      let max = state.data.map(item => {
        return item.min_price
      })
      return Math.max(...max)
    },
    getMinPrice(state) {
      let min = state.data.map(item => {
        return item.min_price
      })
      return Math.min(...min)
    },
    getCountries(state) {
      let counter = -1;
      let resArr = [];
      for (let item in state.data) {
        if (!resArr.includes(state.data[item].country)) {
          resArr.push(state.data[item].country)
        }
      }
      return resArr.map(item => {
        counter++;
        return {
          "id": counter,
          "country": item
        }
      })
    },
    getTypes(state) {
      let counter = -1;
      let resArr = [];
      for (let item in state.data) {
        if (!resArr.includes(state.data[item].type)) {
          resArr.push(state.data[item].type)
        }
      }

      return resArr.map(item => {
        counter++;
        return {
          "name": item,
          "id": counter
        }
      })
    },
    getStars(state) {
      let counter = -1;
      let resArr = [];
      for (let item in state.data) {
        if (!resArr.includes(state.data[item].stars)) {
          resArr.push(state.data[item].stars)
        }
      }
      return resArr.map(item => {
        counter++;
        return {
          "id": counter,
          "star": item
        }
      })
    },
    getReviews(state) {
      let counter = -1;
      return state.data.map(item => {
        counter++;
        return {
          "id": counter,
          "reviews_amount": item.reviews_amount
        }
      })
    }
  }
})