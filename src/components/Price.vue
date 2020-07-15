 <template>
  <div class="price">
    <h4>Цена до:</h4>
    <div class="input">
      <span>{{getMinPrice}}</span>
      <input
        type="range"
        :min="getMinPrice"
        :step="step"
        :max="getMaxPrice"
        v-model="price"
        @change="setData()"
        @mouseleave="flag=!flag"
        @mouseover="flag=!flag"
      />
      <span>{{getMaxPrice}}</span>
    </div>
    <span v-if="flag">Цена до: {{ getPrice }}</span>
  </div>
</template>

<script>
import store from "../store/index";
export default {
  data() {
    return {
      price: this.getMinPrice,
      flag: false,
      step: (this.getMaxPrice - this.getMinPrice) / 100
    };
  },
  methods: {
    setData() {
      this.$store.commit("setData", [this.price, "price"]);
    }
  },
  computed: {
    getMinPrice() {
      return this.$store.getters.getMinPrice;
    },
    getMaxPrice() {
      return this.$store.getters.getMaxPrice;
    },
    getPrice() {
      return this.price == undefined ? this.getMinPrice : this.price;
    }
  }
};
</script>

<style scoped>
.input {
  display: flex;
  max-width: 100%;
  width: 100%;
  justify-content: space-between;
}
</style>