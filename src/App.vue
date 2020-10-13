<template>
  <div id="about" class="about flex flex-col items-center">
      <h1>Years</h1>
      <input
        class="bg-gray-300 px-4 py-2 z-10"
        type="text"
        v-model="year"
        list="years"
        @change="updateYear"
        @click="getMakes"
      />
      <datalist class="w-48 bg-gray-800 text-white" id="years">
        <option
          class="py-2 border-b cursor-pointer"
          v-for="year in years"
          :key="year.year"
          @change="getMakes"
          >{{ year.year }}</option
        >
      </datalist>
    <h4 v-if="year">Selected year is {{year}}</h4>
    <br>
    <br>


    <h1>Makes</h1>
    <input
      class="bg-gray-300 px-4 py-2 z-10"
      type="text"
      v-model="make"
      list="makes"
      @change="updateMake"
      @click="getModels"
    />
    <datalist class="w-48 bg-gray-800 text-white" id="makes">
      <option
        class="py-2 border-b cursor-pointer"
        v-for="make in makes"
        :key="make.make"
         @click="getModels"
        >{{ make.make }}</option
      >
    </datalist>
    <h4 v-if="make">Selected makes is {{make}}</h4>
    <br>
    <br>


    <h1>models</h1>
    <input
      class="bg-gray-300 px-4 py-2 z-10"
      type="text"
      v-model="model"
      list="models"
    />
    <datalist class="w-48 bg-gray-800 text-white" id="models">
      <option
        class="py-2 border-b cursor-pointer"
        v-for="model in models"
        :key="model.model"
        >{{ model.model }}</option
      >
    </datalist>
    <h4 v-if="model">Selected models is {{model}}</h4>
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
      //This is where I give Inıtial state for year
      year: "",
      years: [],
      make: "",
      makes: [],
      model: "",
      models: [],
    };
  },
  computed:{
    ...mapState([
      'year',
      'make',
    ]),
    ...mapGetters([
      'makesUrl',
      'modelsUrl'
    ])
  },
  methods:{
    updateYear(){
      this.updateYearVuex(this.year)
    },
    updateMake(){
      this.updateMakeVuex(this.make)
    },
    ...mapActions([
      'updateYearVuex',
      'updateMakeVuex'
    ]),
    async getMakes(){
      await axios.get(this.makesUrl)
      .then((res)=>{
        this.makes = res.data
      })
    },
    async getModels(){
      await axios.get(this.modelsUrl)
      .then((res)=>{
        this.models = res.data
      })
    }
  },
  async created() {
    this.onClickk;
    try {
      const firstresponse = await axios.get(baseURL);
      this.years = firstresponse.data;
    } catch (e) {
      console.error(e);
    }
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
