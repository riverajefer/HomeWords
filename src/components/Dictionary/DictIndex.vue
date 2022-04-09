<template>
  <div class="dict">
    <div class="my-8" style="margin: 15px 0px">
      <h1>{{ word }}</h1>
    </div>
    <ul>
      <li v-if="definition"><b> Definition: </b> {{ definition }}</li>
      <li v-if="example"><b> Example: </b> {{ example }}</li>
    </ul>
    <audio v-if="audio" :src="audio" controls style="height: 300px;"></audio>
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
.dict {
  padding: 50px;
}

h1 {
  font-size: 3.2em;
  text-transform: uppercase;
}
ul {
  list-style-type: none;
  text-align: justify;
  margin: 50px 0px;
}
li {
  color: #05445E;
  margin: 10px 0px;
  font-size: 2em;
}
audio {
  margin-bottom: 20px;;
}
</style>
