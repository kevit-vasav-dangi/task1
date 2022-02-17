const express = require('express')
const app = express()
const axios = require('axios')
const userData=require('./subtask1')

const url = "https://jsonplaceholder.typicode.com/users"

app.get('/users',async(req,res)=>{
    //console.log(req.params,req.query);
   // console.log(req.query.name)
    const dataUser =(await axios.get(url)).data
    

    const id = dataUser.findIndex(data=>data.name===req.query.name)
    console.log("userid"+id);
    if(id===-1){
        return   console.log('user not available');
    }
    const url1 = "https://jsonplaceholder.typicode.com/users/"+encodeURIComponent(id)+"/posts"  
    console.log(url1);
    const posts = (await axios.get(url1)).data
    console.log(posts[0].title);
    // const idpost = posts.filter(data => {
    //     if (data.userId === id) { return data.id }
    // })
    // console.log("postid"+idpost);
    // console.log(idpost.title);
    // //console.log(idpost);
    //console.log(posts.userid);
    // console.log('username : '+data[id].username+"\nname : "+data[id].name+"\nemail : "+data[id].email+"\ncity : "+data[id].address.city)
    // console.log("id : "+posts.id+'\ntitle : '+posts.title);

})
app.listen(3000,()=>{
    console.log('port started');
})
//userData()