<template>
  <div class="ram">
    <br />
    <v-btn
      @click="onGetRandomWord"
      elevation="2"
      color="#189AB4"
      dark
      large
      raised
      rounded
      >NEW WORD</v-btn
    >
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
