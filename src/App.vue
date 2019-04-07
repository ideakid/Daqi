<template>
  <div id="app">
    <header>
      DQIA
    </header>
    <main>

      <router-view></router-view>
      <informations pm25="101.2" pm10="120" temp="30" humid="2" log_datetime="2019-04-07 13:00:00"/>
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
