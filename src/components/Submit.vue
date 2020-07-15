<template>
  <div class="submit">
    <button type="button" @click="onSubmit()" class="btn btn-primary">Применить фильтры</button>
  </div>
</template>

<script>
import store from "../store/index";

export default {
  data() {
    return {
      valid: true
    };
  },
  methods: {
    onSubmit() {
      let fetchData = this.$store.getters.getFetchData;
      console.log(fetchData);
      for (let item in fetchData) {
        if (fetchData[item] == null) {
          alert("Заполните все фильтры!");
          return;
        }
      }
      this.$store.commit('fetchData', fetchData)
      return;
    }
  }
};
</script>