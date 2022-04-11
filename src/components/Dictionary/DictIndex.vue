<template>
  <div class="pa-50">
    <div class="my-5">
      <h1>{{ word }}</h1>
    </div>
    <ul>
      <li v-if="definition"><span class="subtitle"> Definition: </span> {{ definition }}</li>
      <li v-if="example"><span class="subtitle"> Example: </span> {{ example }}</li>
    </ul>
    <audio v-if="audio" :src="audio" controls></audio>
  </div>
</template>

<script>
export default {
  components: {},

  mounted() {
    this.$root.$on("emitWord", (word) => {
      console.log('he recibido el evento');
      this.word = word;
      this.onGetResultWord();
    });
  },

  data() {
    return {
      result: "",
      definition: "",
      example: "",
      audio: "",
      word: "book",
    };
  },

  methods: {
    async onGetResultWord() {
      try {
        // para resetear
        this.result = "";
        this.definition = "";
        this.example = "";
        this.audio = "";

        const response = await this.$http.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`
        );
        this.result = response;

        this.definition =
          this.result.data[0].meanings[0].definitions[0].definition;
        this.example = this.result.data[0].meanings[0].definitions[0].example;
        this.audio = this.result.data[0].phonetics[0].audio;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>

h1 {
  font-size: 3.2em;
  color: #52FA7B;
  font-weight: bold;
  text-transform: uppercase;
}
ul {
  list-style-type: none;
  text-align: justify;
  margin: 50px 0px;
}
li {
  color: whitesmoke;
  margin: 10px 0px;
  font-size: 2em;
}
.subtitle {
  color: #56E3BB !important;
}
audio {
  margin-bottom: 20px;
}
.v-btn__content {
  font-size: 2.2em !important;
}
</style>
