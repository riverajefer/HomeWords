<template>
  <div class="dict">
    <h1>COMPONENT DICTIONARY</h1>
    <input type="text" name="word" v-model="word" id="word" />

    <h2>Word: {{ word }}</h2>
    <br />
    <button @click="onGetResultWord()">OBTENER DEFINICIÓN</button>
    <hr />

    <ul>
      <li v-if="definition"><b> Definition: </b> {{ definition }}</li>
      <li v-if="example"><b> Example: </b> {{ example }}</li>
    </ul>
    <audio v-if="audio" :src="audio" controls></audio>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$root.$on("emitWord", (word) => {
      console.log(
        "estoy en el compoenente DICTIONARY data del otro componente: ",
        word
      );
      this.word = word;
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

        console.log(this.result.data[0].phonetics[0].audio);
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
  width: 850px;
  height: auto;
  margin: 30px auto;
  padding: 25px;
  background-color: beige;
  border-radius: 20px;
  border: 1px solid black;
}
</style>
