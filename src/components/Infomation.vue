<template>
  <div class="center">
      <table width="100%" border="0" padding="2">
      <tr>
      <td align="right"><img src="../assets/pm1.jpg" alt="" width="50px"></td>
      <td align="left"><label>PM 2.5 : {{pm25}}</label><br>
        <label>PM 10 : {{pm10}}</label>
      </td>
      </tr>
      <tr><td colspan="2">&nbsp;</td></tr>
      <tr>
        <td align="right"><img src="../assets/temp.png" alt="" width="50px"><label>{{temp}}</label>&nbsp;&nbsp;&nbsp;</td>
        <td align="left"><img src="../assets/hum.jpg" alt="" width="30px">&nbsp;<label>{{humid}}</label></td>
      </tr>
       <tr><td colspan="2">&nbsp;</td></tr>
      <tr>
        <td align="right"><img src="../assets/clock.jpg" alt="" width="50px">&nbsp;</td>
        <td align="left"><label>{{log_datetime}}</label></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Infomation',
  props: {
    pm25: String,
    pm10: String,
    temp: String,
    humid: String,
    log_datetime: String
  },
  data () {
    return {
      // props: ['pm25', 'pm10', 'temp', 'humid', 'log_datetime']
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
.center {
  margin: auto;
  width: 100%;
  border: 3px solid green;
  padding: 10px;
}
</style>
