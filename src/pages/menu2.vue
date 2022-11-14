<template>
    <div class="contact">
        <button v-on:click="getData">get user</button>
        <button v-on:click="getOneData">get one user</button>
        <div class="data-view">
            {{users}}
        </div>
        <ul class="data-view2">

        </ul>
    </div>
</template>

<script>
// import axios from 'axios'
import {getDataApi} from '@/api/index'
export default {
    name: 'menu2',
    data() {
        return {
            users: []
        }
    },
    // created() { 
    //     getDataApi()     // 위에서 임포트한 통신 메소드이다. 렌더링시 생성(created)되도록 만든다.
    //     .then(response => (this.users = response.data)) // 성공하면 json 객체를 받아온다.
    //     .catch(error => console.log(error));		  // 실패하면 에러를 뿜어낸다.
    // },
    methods: {
        getData: function() {
            let vm = this;
            getDataApi()   
            .then(function(response) {
                console.log(response)
                vm.users = response.data
                // console.log(this.users)
            })
            .catch(error => console.log(error));	
        },
        getOneData: function() {                  
            getDataApi()
            .then(function(response) {
                const dataApi = response.data;
                console.log(dataApi)
                if(dataApi) {
                    const dataView2 = document.querySelector(".data-view2")   
                    const dataView2Item = dataApi.map(list => {
                        return `<li>${list.name}</li>`
                    }).join('')
                    dataView2.innerHTML = dataView2Item
                }
            })
            .catch(error => console.log(error))
        }
    },    
    
}
</script>

<style scoped>
.contact {
    min-height:700px;
}
.data-view {
    border:1px solid #ddd; 
    width:300px;
    margin: 0 auto;
    padding:20px;
    box-sizing:border-box;
    margin-top:20px;
}
</style>