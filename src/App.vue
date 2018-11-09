<template>
<span>
    <header>
        <ul id="slide-out" class="sidenav">
            <li>
                <div class="user-view">
                    <div class="background">
                        <img src="../images/img_back.jpg">
                    </div>
                    <a href="#user"><img class="circle" src="../images/sergio.jpg"></a>
                    <a href="#name"><span class="white-text name">Sérgio Moreira</span></a>
                    <a href="#email"><span class="white-text email">sergio100br@hotmail.com</span></a>
                </div>
            </li>
            <li><a href="#!"><i class="material-icons">cloud</i>Download</a></li>
            <li><a href="#!"><i class="material-icons">save</i>Salvar</a></li>
            <li><div class="divider"></div></li>
            <li><a href="#!"><i class="material-icons">exit_to_app</i>Sair</a></li>
            <li><a class="waves-effect" href="#!">Efeito</a></li>
        </ul>
    <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  </header>

  <main>
    <router-view/>
  </main>
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
