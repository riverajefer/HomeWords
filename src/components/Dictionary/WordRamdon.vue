<template>
  <div class="ram">
    <v-btn
      @click="onGetRandomWord"
      elevation="2"
      dark
      color="#274472"
      x-large
      rounded
    >
      NEW WORD VOCABULARY
      <v-icon right dark>mdi-text-shadow </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wordRamdonw: "",
    };
  },
  methods: {
    async onGetRandomWord() {
      try {
        const response = await this.$http.get(
          "https://raw.githubusercontent.com/dariusk/corpora/master/data/words/verbs.json"
        );

        const verbs = response.data.verbs;

        const word =
          verbs[
            Object.keys(verbs)[
              Math.floor(Math.random() * Object.keys(verbs).length)
            ]
          ];

        console.log("response", response);
        console.log("word", word);

        this.wordRamdonw = word.present;
        console.log("this.wordRamdonw", this.wordRamdonw);

        this.$root.$emit("emitWord", this.wordRamdonw);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
