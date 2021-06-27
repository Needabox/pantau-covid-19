<template>
  <main v-if="!loading" >
    <Title :text="title" :dataDate="dataDate" class="mt-10"/>
    <Card :stats="stats"/>
    <SelectCountry @get-country="getCountryData" :countries="countries" class="mt-10"/>

    <button 
      @click="clearCountryData"
      v-if="stats.Country"
      class="bg-blue-700 text-white font-bold rounded p-3 mt-10 focus:outline-none hover:bg-blue-600"
    >
      Hapus Pilihan
    </button>

    <div class="mt-10">
      <h1 class="text-center text-3xl md:text-5xl font-mono text-blue-600">GERAKAN 3M</h1>
      <Tips class="mt-10"/>
    </div>

    <div class="mt-20">
      <h1 class="text-center text-3xl md:text-5xl font-mono text-blue-600 mb-15">GEJALA UMUM</h1>
      <Gejala class="mt-10"/>
    </div>

  </main>

  <main class="flex flex-col align-center justify-center text-center" v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      Loading...
    </div>
    <img :src="loadingImage" class="w-64 m-auto" alt="Loading...">
  </main>
</template> 

<script>

import Title from '@/components/Title.vue'
import Card from '@/components/Card.vue'
import SelectCountry from '@/components/SelectCountry.vue'
import Tips from '@/components/3M.vue'
import Gejala from '@/components/Gejala.vue'

export default {
  name: 'Home',
  components: {
    Title, Card, SelectCountry, Tips, Gejala
  },
  data(){
    return {
      loading: true,
      title: 'Global',
      dataDate: '',
      stats: '',
      countries: [],
      loadingImage: require('../assets/loading2.gif')
    }
  },
  methods: {
    async fetchCovidData(){
      const res = await fetch('https://api.covid19api.com/summary')
      const data = await res.json()

      return data
    },
    getCountryData(country){
      this.stats = country
      this.title = country.Country
    },
    async clearCountryData(){
      this.loading = true
      const data = await this.fetchCovidData()

      this.title = 'Global'
      this.stats = data.Global
      this.loading = false
    }
  },
  async created() {
    const data = await this.fetchCovidData()
    this.dataDate = data.Date
    this.stats = data.Global
    this.countries = data.Countries
    this.loading = false
    console.log(data)
  }
}
</script>
