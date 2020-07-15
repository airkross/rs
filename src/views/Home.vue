<template>
  <div class="home">
    <div class="container">
      <div class="row mt-5">
        <div class="col-4">
          <app-clear class="mb-3"></app-clear>
          <app-country class="mb-3"></app-country>
          <app-type class="mb-3"></app-type>
          <app-stars class="mb-3"></app-stars>
          <app-rev class="mb-3"></app-rev>
          <app-price class="mb-3"></app-price>
          <app-submit class="mb-3"></app-submit>
        </div>
        <div v-if="!getAllData.length" class="col-8">Записей не найдено</div>
        <div v-else class="col-8">
          <div class="title">
            <div class="row">
              <div class="col-3">Нзвание</div>
              <div class="col-6">Описание</div>
              <div class="col-3"></div>
            </div>
          </div>
          <div class="body">
            <div class="row" v-for="item in getAllData" :key="item.rating">
              <div class="col-3">{{item.name}}</div>
              <div class="col-6">{{item.description}}</div>
              <div class="col-3">
                <button type="button" class="btn btn-success">Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appClear from "../components/Clear";
import appCountry from "../components/Country";
import appType from "../components/Type";
import appStars from "../components/Stars";
import appRev from "../components/Counter";
import appPrice from "../components/Price";
import appSubmit from "../components/Submit";
import store from "../store/index";
export default {
  name: "Home",
  data() {
    return {
      data: [],
      counter: 0
    };
  },
  computed: {
    getAllData() {
      return this.$store.getters.getPostsdata.slice(0, 3) ;
    }
  },
  components: {
    appClear,
    appCountry,
    appType,
    appStars,
    appRev,
    appPrice,
    appSubmit
  }
};
</script>

<style scoped>
</style>