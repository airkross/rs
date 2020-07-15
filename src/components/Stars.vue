 <template>
  <div class>
    <h4>Звезды</h4>
    <div class="stars">
      <div class="l">
        <input
          type="checkbox"
          v-for="item in getStars"
          :key="item.id"
          :id="'id'+item.id"
          :value="item"
          @change="setData()"
          v-model="starsSelect"
        />
      </div>
      <div class="r">
        <label
          v-for="i in getStars"
          :key="i.id+'id'"
          :for="'id'+i.id"
        >{{i.star}} {{i.star==1?'звезда': ''}} {{i.star> 1 && i.star < 5 ?'звезды': ''}} {{i.star>= 5?'звезд': ''}}</label>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index";
export default {
  data() {
    return {
      starsSelect: [] //итоговая выборка звезд лежит тут
    };
  },
  methods:{
    setData(){
      this.$store.commit('setData', [this.starsSelect, 'stars'])
    }
  },
  computed: {
    getStars() {
      return this.$store.getters.getStars;
    }
  }
};
</script>

<style scoped>
.stars {
  display: flex;
}
.l {
  display: flex;
  flex-direction: column;
}
.l input {
  margin-top: 7px;
  margin-bottom: 12px;
  margin-right: 5px;
}
.r {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}
</style>