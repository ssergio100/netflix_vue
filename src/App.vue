<template>
<span>
  <header>
    <nav-bar cor="blue" logo="Site" url="www.google.com"></nav-bar>
  </header>
<div class="container">
  <main>
    <router-view/>
  </main>
</div>
<Footer cor="indigo darken-1">
  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
</Footer>
</span>
</template>

<script>
import NavBar from '@/componentes/NavBar'
import Footer from '@/componentes/Footer'
export default {
  name: 'app',
  components: {
    NavBar,
    Footer
  },
}
</script>

<style>

</style>
