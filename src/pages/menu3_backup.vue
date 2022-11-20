<template>
    <div class="menu3">
        <form method="post" action="https://jsonplaceholder.typicode.com/posts">
            <input type="text" name="userId">
            <input type="text" name="id">
            <input type="text" name="title">
            <input type="text" name="body">
            <button v-on:click="submit" type="button">submit</button>
            <button v-on:click="getData" type="button">get</button>
            <button v-on:click="deleteData(8)" type="button">delete</button>
        </form>
        <ul class="form-result">

        </ul>
        <p>{{num}} <b>{{num2}}</b></p>
    </div>
</template>

<script>
import axios from 'axios'
import {getDataApi2} from '@/api/index'
// import {postDataApi2} from '@/api/index'
export default {
    name: 'menu3',
    data() {
        return {
            userId: '',
            id: '',
            title: '',
            body: '',
            num: 3,
        }   
    },
    computed: {
        num2() {
            return this.num * 3
        }
    }, 
    methods: {
        async getData() {
            await getDataApi2()
            .then(function(response) {
                const dataItem = response.data;
                console.log(dataItem)
                if(dataItem) {
                    const resultView = document.querySelector(".form-result")
                    const resultItem = dataItem.map(item=> {
                        return `<li><span>${item.userId}</span><span>${item.id}</span><span>${item.title}</span><span>${item.body}</span></li>`
                    }).join('')
                    resultView.innerHTML = resultItem
                }
            })
            .catch(error => console.log(error))
        },
        async deleteData(id) {            
            try {
                const deleteDataa = await axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
                console.log(deleteDataa)
            }
            catch {
                console.log(error => console.log(error))
            }

            // await deleteApi(id) 
            // .then(function(response) {
            //     console.log(response)
            // })
            // .catch(error => console.log(error))
            
            // try {
            //     const deleteData = await axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
            //     console.log(deleteData)             
            // }
            // catch(err) {
            //     console.log('err',err)
            // }
        },
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
            axios.post('https://jsonplaceholder.typicode.com/posts', {
                userId: this.userId,
                id: this.id,
                title: this.title,
                body: this.body
            })
            try {
                const postData = await axios.post('https://jsonplaceholder.typicode.com/posts', itemData)
                console.log(postData)

            }
            catch(err) {
                console.log('err',err)
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