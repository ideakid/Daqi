<template>
  <div id="app">
    <header>
      <span>Vue.js PWA</span>
    </header>
    <main>
      <infomation msg="2.6"></infomation>
    </main>
  </div>
</template>


<script>
  import Infomation from './components/Infomation.vue'
  import Service from './service/apiservice'
  export default {
    name: 'app',
    data () {
      return {
        dataInfo: [ ]
      }
    },
    components: {
      Infomation,
      Service
    },
    created () {
      Service.getAll().then(function (res) {
        this.dataInfo = res.data
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
