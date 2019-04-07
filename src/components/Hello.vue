<template>
  <div class="hello">
      
  </div>
</template>

<script>
import History from '../components/History'
import StationApi from '../api-services/stations.service'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      stationData: {}
    }
  },
  components: {
    History
  },
  created () {
    StationApi.get(9, 'avghr').then((response) => {
      this.stationData = response.data[0]
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
