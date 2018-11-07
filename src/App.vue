<template>
<span>
  <header>
    <!-- <nav-bar cor="blue" logo="Site" url="www.google.com"></nav-bar> -->
    <ul id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class="background">
        <img src="../images/img_back.jpg">
      </div>
      <a href="#user"><img class="circle" src="../images/sergio.jpg"></a>
      <a href="#name"><span class="white-text name">Sérgio Moreira</span></a>
      <a href="#email"><span class="white-text email">sergio100br@hotmail.com</span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  </header>
<div class="container">
  <main>
    <router-view/>
  </main>
</div>
<!-- <Footer cor="indigo darken-1">
  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
</Footer> -->
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
