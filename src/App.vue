<template>
  <div id="app">
    <h1>Soy el componente principal</h1>
    <br>
    <wordRamdon />
    <dict-index  />
  </div>
  
</template>

<script>
import DictIndex from './components/Dictionary/DictIndex.vue'
import WordRamdon from './components/Dictionary/WordRamdon.vue'

export default {
  name: 'App',
  components: {
    DictIndex,
    WordRamdon
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
