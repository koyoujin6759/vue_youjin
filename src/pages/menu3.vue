<template>
    <div class="menu3">
        <form method="post" action="https://api.hnpwa.com/v0/news.json">
            <input type="text" name="userId">
            <input type="text" name="id">
            <input type="text" name="title">
            <input type="text" name="body">
            <button v-on:click="submit" type="button">submit</button>
            <button v-on:click="getData" type="button">get</button>
            <!-- <button v-on:click="deleteData(8)" type="button">delete</button> -->
        </form>
        <ul class="form-result">

        </ul>
        <p>{{num}} <b>{{num2}}</b></p>
    </div>
</template>

<script>
// import axios from 'axios'
import {getDataApi,basePost} from '@/api/index'
export default {
    name: 'menu3',
    data() {
        return {
            num:3,
            id: '',
            title: '',
            domain:''
        }   
    },
    computed: {
        num2() {
            return this.num * 3
        }
    }, 
    methods: {
        async getData() {
            await getDataApi()
            .then(function(response) {
                const dataItem = response.data;
                console.log(dataItem)
                if(dataItem) {
                    const resultView = document.querySelector(".form-result")
                    const resultItem = dataItem.map(item=> {
                        return `<li><span>${item.id}</span><span>${item.title}</span><span>${item.domain}</span></li>`
                    }).join('')
                    resultView.innerHTML = resultItem
                }
            })
            .catch(error => console.log(error))            
        },
        // async deleteData(id) {  
        //     await deleteApi(id)           
        //     try {
        //         const deleteDataa = await axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
        //         console.log(deleteDataa)
        //     }
        //     catch {
        //         console.log(error => console.log(error))
        //     }
            
        // },
        async submit() {            
            const input1 = document.querySelector("input[name=userId]")
            const input2 = document.querySelector("input[name=id]")
            const input3 = document.querySelector("input[name=title]")
            const input4 = document.querySelector("input[name=body]")
            const itemData = {
                userId: input1.value,
                id: input2.value,
                title: input3.value,
                body: input4.value
            };
            // await basePost()
            // .then(function(response) {
            //     const dataItem = response.data;
            //     console.log(dataItem)
                
            // })
            // .catch(error => console.log(error))    
            try {
                const postData = await basePost(itemData) 
                console.log(postData)
            }
            catch {
                console.log(error => console.log(error))
            }
        },
        
    },    
    // created() {
    //     this.deleteData(10);
    // }
}
</script>

<style scoped>
.menu3 {
    min-height:700px;
}
form input {
    vertical-align:middle;
    width:200px;
    border:1px solid #ddd;
    padding:0 20px;
    box-sizing:border-box; 
    height:35px;
}
form button {
    vertical-align:middle;
    margin-left:10px;
    height:35px;
    line-height:35px;   
}
.form-result {
    border:1px solid plum;
    margin:0 auto;
    width:700px; 
    min-height:200px;
    margin-top:30px;
    text-align:left;
}
.form-result::v-deep li span {
    padding:0 5px; 
    color:#333;
}

</style>