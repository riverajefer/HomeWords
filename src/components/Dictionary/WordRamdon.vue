<template>
  <div class="ram">
    <v-btn
      @click="onGetRandomWord"
      elevation="2"
      light
      color="#41C462"
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
      wordRamdon: "Book",
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

        this.wordRamdon = word.present;

        console.log("this.wordRamdon", this.wordRamdon);

        this.$root.$emit("emitWord", this.wordRamdon);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
