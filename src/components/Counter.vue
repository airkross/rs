 <template>
  <div class="rev">
    <h4>Количество отзывов от:</h4>
    <input type="text" v-model.number.trim="revSelect" @change="setData()" />
  </div>
</template>

<script>
import store from "../store/index";
export default {
  data() {
    return {
      revSelect: 0,
    };
  },
  watch: {
    revSelect: function(val) {
 
      if (Number.isInteger(val) || val == "") {
        this.revSelect = val;
        if (this.flag == true) {
        }
      } else {
        this.revSelect = Math.trunc(val);
      }
    }
  },
  methods: {
    setData(){
      this.$store.commit('setData', [this.revSelect, 'count_from'])
    }
  }
};
</script>

