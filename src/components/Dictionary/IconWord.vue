<template>
  <v-row justify="center">
    <!-- <v-btn @click="onGetTokenApiFlaticon()"> GET TOKEN </v-btn> -->
    <!--     
    <v-btn @click="onSearchIcon()"> SEARCH ICON </v-btn> -->
    <v-img
      class="my-7"
      v-if="image"
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="128"
      max-width="128"
      :src="image"
    ></v-img>
  </v-row>
</template>

<script>
export default {
  // props: ["word"],
  mounted() {
    console.log("word", this.word);
    this.$root.$on("emitWord", (word) => {
      console.log("word emit icon: ", word);
      this.word = word;
      this.countOn++;
      console.log("this.countOn", this.countOn);
      if (this.countOn == 1) {
        this.onSearchIcon();
      }
    });
  },

  data() {
    return {
      image: "",
      token: "",
      word: "",
      flag: false,
      countOn: 0,
      attemptsGetToken: 0,
    };
  },
  methods: {
    async onGetTokenApiFlaticon() {
      try {
        const url = "https://api.flaticon.com/v3/app/authentication";

        const response = await this.$http.post(url, {
          apikey: "8eda479a116a5e1af17b3ddd40f0fcd14c66e61e",
        });

        console.log("response", response);

        this.token = response.data.data.token;

        console.log("response token: ", this.token);
        localStorage.setItem("token", this.token);
      } catch (error) {
        console.log(error);
      }
    },
    async onSearchIcon() {
      try {
        this.flag = true;
        const url = `https://api.flaticon.com/v3/search/icons/{orderBy}?q=${this.word}&page=1&limit=1`;

        const token = localStorage.getItem("token");

        const response = await this.$http.get(url, {
          headers: {
            Authorization: `Bearer  ${token}`,
          },
        });

        console.log("response", response);
        if (response.data.data.length > 0) {
          this.image = response.data.data[0].images["128"];
        }
        this.countOn = 0;
      } catch (error) {
        console.log(error);
        console.log("status error: ", error.response.status); // 401
        if (error.response.status === 401 && this.attemptsGetToken <= 2) {
          this.attemptsGetToken++;
          this.onGetTokenApiFlaticon();
          this.onSearchIcon();
        }
        this.image = "";
        this.countOn = 0;
      }
    },
  },
};
</script>

<style></style>
