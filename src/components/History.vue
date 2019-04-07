<template>
    <div>
        <table>
            <tr>
                
                <td><h3>Date Time</h3></td>
                <td><h3>PM 2.5</h3></td>
                <td><h3>PM 10</h3></td>
                
            </tr>
            <tr  v-for="valueitem in stationdata.value"  v-bind:key="valueitem.log_datetime">
                <td>{{valueitem.log_datetime }}</td>
                <td>{{valueitem.pm25 }}</td>
                 <td>{{valueitem.pm10 }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'History',
  props: ['stationdata']
}
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
h3 {
  
  text-align: center;
}
td {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}
th{
  border: 1px solid #dddddd;
  text-align: center;
  padding: 10px;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
