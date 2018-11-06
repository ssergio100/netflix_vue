<template>
<div>
  <h2>Social</h2>
  <form>
    <input type="text" name="titulo" ref="titulo"/>
    <input type="text" name="body" value="" ref="body" />
    <input type="hidden" name="ativo" value="1" />
    <a @click.prevent="newPost()" class="waves-effect waves-teal btn-flat">Cadastrar</a>
  </form>

  <div class="row">
    <Card v-for="post in posts" @remove="doRemove" v-bind:key="post.ativo" v-if="post.ativo" v-bind:id="post.id" v-bind:body="post.body" v-bind:titulo="post.titulo" />
  </div>
</div>
</template>
<script>
import Card from '@/componentes/Card'
export default {
  components: {
    Card
  },
  name: 'Home',
  data() {
    return {
      postData: {},
      posts: []
    }
  },
  methods: {
    getData() {
      this.$http.get('http://localhost:3000/posts').then(res => {
        this.posts = res.body
      })
    },
    newPost() {
      this.postData = {
          "titulo": this.$refs.titulo.value,
          "body": this.$refs.body.value,
          "ativo": 1
        },
     
        this.$http.post('http://localhost:3000/posts', this.postData).then(response => {
          this.getData()
        });
    },
    doRemove(card) {
        console.log(card)
         this.$http.delete('http://localhost:3000/posts/' + card.id).then(response => {
             this.getData()
             $('#'+card.id).remove()
            //  comentario
         });
  },
  },
  created() {
    this.getData();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
