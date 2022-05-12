<template>
  <v-app>
    <div id="app">
      <v-container class="#274472 lighten-5 mb-6">
        <v-card
          color="#114371"
          min-height="600px"
          dark
          class="pa-6"
          style="padding: 25px"
          shaped
        >
          <wordRamdon />
          <DictIndex />
        </v-card>

        <v-btn class="my-10 mx-10" color="#F5EF38" @click="onReloadPage()" absolute top left fab>
          <v-icon>mdi-reload</v-icon>
        </v-btn>
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
  methods: {
    onReloadPage() {
       location.reload();
    }
  }
};
</script>

<style>
@import url("./assets/css/main.css");
* {
  font-family: "Roboto Condensed", sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: #132138;
}
</style>
