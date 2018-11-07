<template>

    <div class="card horizontal">
      <div class="card-image">
        <img src="../../images/sergio.jpg">
      </div>
      <div class="card-stacked">
        <div class="card-content">
           <p><span class="card-title">{{cargo}}</span></p>
       <p><span>{{empresa}}</span></p>
       <span>{{atribuicoes}}</span>
        </div>
        <div class="card-action">
         <a href="#" v-on:click="remove(id)">Remover</a>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Card',
  props: ['id', 'cargo', 'empresa','atribuicoes'],
  data() {
    return {
      //id: null
    }
  },
  methods: {
    remove() {
      this.$emit('remove',this)
      }
    }
  }

</script>
