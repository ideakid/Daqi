<template>
  <div id="app">
    <header>
      DQIA
    </header>
    <main>

      <router-view></router-view>
      <informations :pm25="pm25" :pm10="pm10" :temp="temp" :humid="humid" :log_datetime="log_datetime"/>
      <br>
      <h2>History</h2>
      <History v-bind:stationdata="stationData" />
    </main>
  </div>
</template>

<script>
import informations from './components/Infomation.vue'
import History from './components/History'
import StationApi from './api-services/stations.service'

export default {
  name: 'app',
  data () {
    return {
      stationData: {},
      pm25: '',
      pm10: '',
      temp: '',
      humid: '',
      log_datetime: ''

    }
  },
  components: {
    informations,
    History
  },
  created () {
    StationApi.get(9, 'avghr').then((response) => {
      this.stationData = response.data[0]
      this.pm25 = this.stationData.value[0].pm25
      this.pm10 = this.stationData.value[0].pm10
      this.temp = this.stationData.value[0].temp
      this.humid = this.stationData.value[0].humid
      this.log_datetime = this.stationData.value[0].log_datetime
      console.log(this.stationData.value[0].log_datetime)
    })
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  text-align: center;
  margin: 0;
  padding: 20px;
  /*height: 56px;*/
  background-color: #35495E;
  color: #ffffff;
}

header span {
  color: white;
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}
</style>
