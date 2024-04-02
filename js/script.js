import {toDo} from './data.js';

const {createApp} = Vue;

createApp({
    data(){
        return{
            toDo
        }
    },
    methods:{

    },
    mounted(){
        console.log(this.toDo);
    }

}).mount('#app')