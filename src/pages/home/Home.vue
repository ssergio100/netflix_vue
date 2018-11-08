<template>
<div>

        <div class="row">
            <Card 
            v-for="experiencia in experiencias" 
            v-if="experiencia.ativo"
            v-bind:id="experiencia.id" 
            v-bind:key="experiencia.id" 
            v-bind:empresa="experiencia.empresa" 
            v-bind:atribuicoes="experiencia.atribuicoes" 
            v-bind:cargo="experiencia.cargo"
            v-bind:classes="classes" 
            v-on:remove="doRemove" />
        </div>
        <div class="fixed-action-btn">
            <a class="btn-floating btn-large waves-effect waves-light modal-trigger red" href="#modal1"><i class="material-icons">add</i></a>
        </div>
  
    <div id="modal1" class="modal bottom-sheet">
        <div class="modal-content">
            <h4>Novo</h4>
            <form>
                <input type="text" name="cargo" ref="cargo"/>
                <input type="text" name="empresa" value="" ref="empresa" />
                <input type="hidden" name="ativo" value="1" />
            </form>
        </div>
        <div class="modal-footer">
             <a @click.prevent="newPost()" class="waves-effect waves-light btn"><i class="material-icons left">save</i>Salvar</a>
            <div class="modal-close waves-effect waves-green btn-flat">Fechar</div>
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
        experiencias: [],
        classes:'col s12 l12 x12'
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
                "atribuicoes": '',
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
        doRemove(card) {
            this.$http.delete('http://localhost:3000/experiencias/' + card.id).then(response => {
                this.getData()
                $('#'+card.id).remove()
                var toastHTML = '<span>Removido com sucesso"</span>';
                M.toast({html: toastHTML})
                console.log('Removendo '+card.id)
            });
        }
    }
}

function dispensar() {
        M.Toast.dismissAll();
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
