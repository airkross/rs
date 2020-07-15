 <template>
  <div class="type">
    <h4>Тип:</h4>
    <multiselect
      v-model="value"
      :options="options"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      placeholder="Выберети типы"
      label="name"
      track-by="name"
      @change="setData()"
    >
      <template slot="selection" slot-scope="{ values, search, isOpen }">
        <span
          class="multiselect__single"
          v-if="values.length &amp;&amp; !isOpen"
        >{{ values.length }} выбрано типов</span>
      </template>
    </multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import store from "../store/index";
export default {
  data() {
    return {
      typeSelect: [],
      value: [],
      options: this.$store.getters.getTypes
    };
  },
  components: {
    Multiselect
  },
  watch: {
    value: function(val) {
      this.$store.commit('setData', [this.value, 'type'])
    }
  }
};
</script>

<style scoped>
.multiselect__tags {
  display: flex;
  flex-direction: column;
}
.multiselect__input {
  width: 100% !important;
}
.select {
  height: 40px;
  padding: 10 15pxpx;
  background: rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #000;
}
.select:last-child {
  border-bottom: none;
}
.select:hover {
  background: rgba(0, 0, 0, 0.2);
}
.bg {
  background: rgba(0, 0, 0, 0.2);
}
</style>