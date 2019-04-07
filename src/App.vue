<template>
  <div id="app">
    <header>
    
    </header>
    <main>
     
      <router-view></router-view>
      <informations pm25='101.2'  pm10='120' temp="30" humid="2" log_datetime="2019-04-07 13:00:00"/>
    </main>
  </div>
</template>

<script>
import informations from './components/Infomation.vue'
export default {
  name: 'app',
  components: {
    informations
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
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
