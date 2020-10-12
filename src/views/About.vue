<template>
  <div id="about" class="about flex flex-col items-center">
      <input
        class="bg-gray-300 px-4 py-2 z-10"
        type="text"
        v-model="year"
        list="years"
        @change="updateYear"
      />
      <datalist class="w-48 bg-gray-800 text-white" id="years">
        <option
          class="py-2 border-b cursor-pointer"
          v-for="year in years"
          :key="year.year"
          @click="updateYear"
          >{{ year.year }}</option
        >
      </datalist>
    <h1>{{year}}</h1>
    <input
      class="bg-gray-300 px-4 py-2 z-10"
      type="text"
      v-model="make"
      list="makes"
    />
    <datalist class="w-48 bg-gray-800 text-white" id="makes">
      <option
        class="py-2 border-b cursor-pointer"
        v-for="make in makes"
        :key="make.make"
        >{{ make.make }}</option
      >
    </datalist>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters, mapState } from 'vuex';
const baseURL =
  "https://rateengine.ship.cars/v2/vehicles/years/?fbclid=IwAR3dwvL6rAC3rojXSO8zlwF6ZF-_WsenLUYcIwOcUv8q7z278JrHAyn7uOI&format=json&token=5cbe12fb62f4941267d623499a2a4fd5948fd3ef";
export default {
  name: "about",
  data: () => {
    return {
      year: "1995",
      years: [],
      make: "",
      makes: [],
    };
  },
  computed:{
    ...mapState([
      'year'
    ]),
    ...mapGetters([
      'makesUrl'
    ])
  },
  methods:{
    updateYear(){
      this.updateYearVuex(this.year)
    },
    ...mapActions([
      'updateYearVuex'
    ])
  },
  async created() {
    this.onClickk;
    try {
      const firstresponse = await axios.get(baseURL);
      this.years = firstresponse.data;
      const secondresponse = await axios.get(
        this.makesUrl
      );
      this.makes = secondresponse.data;
    } catch (e) {
      console.error(e);
    }
  }
};
</script>
