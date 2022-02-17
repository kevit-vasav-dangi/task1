const axios = require('axios')
const express = require('express')
const app = express()
const userData=(name,callback)=>{
    const url = "https://jsonplaceholder.typicode.com/users?q"
    axios.get(url)
    .then(({data})=>{
        console.log(data);
    }).catch((e)=>{
        console.log(e);
    })
}
module.exports=userData;
