 <template>
  <div class="country">
    <h4>Страна:</h4>
    <input list="countries" v-model="countrySelect" @change="setData()"/>
    <datalist id="countries" name="countries">
      <option
        v-for="item in getCountries"
        :key="item.id"
        :value="item.country"
        selected
      >{{item.country}}</option>
    </datalist>
  </div>
</template>

<script>
import store from "../store/index";
export default {
  data() {
    return {
      countrySelect: ""
    };
  },
  methods:{
    setData(){
      this.$store.commit('setData', [this.countrySelect,'country'])
    }
  },
  computed: {
    getCountries() {
      return this.$store.getters.getCountries;
    }
  }
};
</script>
