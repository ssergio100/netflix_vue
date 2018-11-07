<template>
<div>
<div class="container">
    <div class="row">
        <div class="col s12 l6 xl6" v-for="experiencia in experiencias" v-on:click="doRemove(experiencia.id)" v-if="experiencia.ativo" v-bind:key="experiencia.id" v-bind:id="experiencia.id">
        <Card v-bind:empresa="experiencia.empresa" v-bind:atribuicoes="experiencia.atribuicoes" v-bind:cargo="experiencia.cargo" />
        </div>
    </div>
    <div class="fixed-action-btn">
    <a class="btn-floating btn-large waves-effect waves-light modal-trigger red" href="#modal1"><i class="material-icons">add</i></a>
    </div>
</div>
<div id="modal1" class="modal">
    <div class="modal-content">
        <h4>Novo</h4>
        <form>
            <input type="text" name="cargo" ref="cargo"/>
            <input type="text" name="empresa" value="" ref="empresa" />
            <input type="text" name="atribuicoes" value="" ref="atribuicoes" />
            <input type="hidden" name="ativo" value="1" />
            <a @click.prevent="newPost()" class="waves-effect waves-teal btn-flat">Cadastrar</a>
        </form>
    </div>
    <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Fechar</a>
    </div>
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
    experiencias: []
    }
},
methods: {
    getData() {
    this.$http.get('http://localhost:3000/experiencias').then(res => {
        this.experiencias = res.body
      
    },res => {
         M.toast({html: 'Houve uma falha na requisição!'})
    }
    )
    },
    newPost() {
    this.postData = {
        "cargo": this.$refs.cargo.value,
        "empresa": this.$refs.empresa.value,
        "atribuicoes": this.$refs.atribuicoes.value,
        "ativo": 1
        },
    
        this.$http.post('http://localhost:3000/experiencias', this.postData).then(() => {
        M.toast({html: 'Criado com sucesso!'})
        this.getData()
        },
        () => {
        M.toast({html: 'O cadastro não deu certo!'})
        }
        );
    },
    doRemove(id) {
        console.log(id)
        this.$http.delete('http://localhost:3000/experiencias/' + id).then(response => {
            this.getData()
            $('#'+id).remove()
            M.toast({html: 'Removido com sucesso!'})
            console.log('Removendo '+id)
            //  comentario
        });
},
},
created() {
    this.getData();
}

}
$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    console.log('inicializou')
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
