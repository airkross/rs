<template>
  <div class="clear">
    <button type="button" @click="clear()" class="btn btn-primary">Очистить фильтры</button>
  </div>
</template>

<script>
import store from "../store/index";
export default {
  methods:{
    clear(){
      this.$store.commit('clearData')
    }
  }
}
</script>