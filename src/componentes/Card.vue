<template>
<div class="col s6" v-bind:id="id">
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">{{titulo}}</span>
      <p>

        {{body}}</p>
    </div>
    <div class="card-action">
      <a href="#" v-on:click="remove(id)">Remover</a>
      <a href="#">This is a link</a>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Card',
  props: ['id', 'titulo', 'body'],
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
