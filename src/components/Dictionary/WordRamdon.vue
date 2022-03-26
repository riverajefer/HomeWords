<template>
    <div class="ram">
        <h1>WordRamdon: {{wordRamdonw}}</h1>
        <br>
        <button @click="onGetRandomWord">Obtener palabra aleatoria</button>
    </div>
</template>

<script>

export default {

    data(){
        return {
            wordRamdonw: ''


        }
    },
methods: {
    async onGetRandomWord(){
        try  {
            const response = await this.$http.get(
                'https://random-word-api.herokuapp.com/word?number=1'
            );
            this.wordRamdonw = response.data[0];
            this.$root.$emit('emitWord', this.wordRamdonw);


        } catch (error) {
            console.log(error);
        }
        
    }
}
}
</script>

<style>
.ram {
  width: 850px;
  height: auto;
  margin: 30px auto;
  padding: 25px;
  background-color: rgb(220, 229, 245);
  border-radius: 20px;
  border: 1px solid black;
}
</style>