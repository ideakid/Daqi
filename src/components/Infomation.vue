<template>
  <div>
      <table>
      <tr>
      <td><img src="../assets/pm1.jpg" alt="" width="50px"></td><td><label>{{pm25}}</label><br>
        <label>{{pm10}}</label>
      </td>
      </tr>
      <tr>
        <td><img src="../assets/temp.png" alt="" width="50px"><label>{{temp}}</label></td>
        <td><img src="../assets/hum.jpg" alt="" width="30px"><label>{{humid}}</label></td>
      </tr>
      <tr>
        <td><img src="../assets/clock.jpg" alt="" width="50px"></td>
        <td><label>{{log_datetime}}</label></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Infomation',
  data () {
    return {
      msg: 'Informations',
      props: ['pm25', 'pm10', 'temp', 'humid', 'log_datetime']
    }
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
