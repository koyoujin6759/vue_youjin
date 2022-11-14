<template>
    <div class="menu3">
        <form>
            <input type="text" name="userId">
            <input type="text" name="id">
            <input type="text" name="title">
            <input type="text" name="body">
            <button v-on:click="submit">submit</button>
            <button v-on:click="getData">get</button>
        </form>
        <ul class="form-result">

        </ul>
    </div>
</template>

<script>
// // import axios from 'axios'
import {getDataApi2} from '@/api/index'
import {postDataApi2} from '@/api/index'
export default {
    name: 'menu3',
    data() {
        return {
            userId: '',
            id: '',
            title: '',
            body: ''
        }
    },
    methods: {
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
            try {
                // const response = await postDataApi2(itemData);
                // postDataApi2(itemData)
                console.log(itemData)
                await postDataApi2(itemData)
            }
            catch(err) {
                console.log('err',err)
            }
        },
        getData() {
            getDataApi2()
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
        }
    },    
    
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