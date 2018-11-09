<template>
<div class="container">
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
            v-bind:icons="icons" 
            v-on:remove="doRemove" />
        </div>
        <div class="fixed-action-btn">
            <a class="btn-floating btn-large waves-effect waves-light modal-trigger red" href="#modal1"><i class="material-icons">add</i></a>
        </div>
  
    <div id="modal1" class="modal bottom-sheet" v-on:keyup.enter="newPost">
        <div class="modal-content">
             <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input id="cargo" type="text" class="validate" ref="cargo">
                        <label for="cargo">Cargo</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="empresa" type="text" class="validate" ref="empresa">
                        <label for="empresa">Empresa</label>
                    </div>
                    <div class="input-field col s12">
                        <label>
                        <input type="checkbox" />
                        <span>Emprego atual</span>
                        </label>
                    </div>
                </div>
                <input type="hidden" name="ativo">
            </form>
  </div>s
        </div>
        <div class="modal-footer">
             <a @click.prevent="newPost()" class="waves-effectwaves-green btn-flat">Salvar</a>
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
        classes:'col s12 l12 xl12',
        icons:[
                {class:'material-icons pink-text',img:'today',func:'remove'},
                {class:'material-icons blue-text',img:'device_hub',func:'remove2'},
                {class:'material-icons green-text',img:'local_phone',func:'remove3'},
                {class:'material-icons purple-text',img:'place',func:'remove4'}
            ]
        }
    },          
    methods: {
        openModal(){
            $('.modal').modal('open')
        },
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
                $('.modal').modal('close')
                this.getData()
            },
            () => {
                M.toast({html: 'O cadastro não deu certo!'})
            })
        },
        doRemove(card) {
            this.$http.delete('http://localhost:3000/experiencias/' + card.id).then(response => {
                this.getData()
                var toastHTML = '<span>Removido com sucesso</span>';
                M.toast({html: toastHTML})
                console.log('Removendo '+card.id)
            });
        }
    },
    mounted(){
        $('.modal').modal();
        $('.sidenav').sidenav();
        $('.fixed-action-btn').floatingActionButton();
        $('.datepicker').datepicker()
        this.getData()
      
        console.log('Montado!')
        window.addEventListener("keypress", e => {
            console.log(e.keyCode);
        });
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
