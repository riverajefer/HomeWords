<template>
  <v-app>
    <div id="app">
      <v-container class="#274472 lighten-5 mb-6">
        <v-card color="#41729F" dark class="pa-6" style="padding: 25px" shaped>
          <wordRamdon />
          <DictIndex />
        </v-card>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import DictIndex from "./components/Dictionary/DictIndex.vue";
import WordRamdon from "./components/Dictionary/WordRamdon.vue";

export default {
  name: "App",
  components: {
    DictIndex,
    WordRamdon,
  },
};
</script>

<style>
@import url('./assets/css/main.css');
* {
  font-family: "Roboto Condensed", sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #274472;
}
</style>
