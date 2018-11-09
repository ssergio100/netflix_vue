<template>
    <div v-bind:class="classes">
        <div class="card horizontal">
        <!-- <div class="card-image">
            <img src="../../images/sergio.jpg">
        </div> -->
        <div class="card-stacked">
            <div class="card-content">
                <div class="blue-text text-darken-2">{{cargo}}</div><br>
                <p><span>{{empresa}}</span><br></p>
                <span>{{atribuicoes}}</span><br>
                    <i v-for="icon in icons" v-bind:class="icon.class" v-bind:key="icon.img" v-on:remove="doRemove" >{{icon.img}}</i>     
            </div>
            <div class="card-action">
            <a href="#" v-on:click="remove()">Remover</a>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Card',
    props: ['icons','classes','id', 'cargo', 'empresa','atribuicoes'],
    data() {
        return {
            //id: null
        }
    },
    methods: {
        remove() {
        console.log(this)
        this.$emit('remove',this)
        }
        }
    }

</script>
