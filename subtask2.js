const axios = require('axios')
const express = require('express')
const app = express()

const getUserComments = async (email,name) => {
    const commentData = (
        await axios.get(
            `https://jsonplaceholder.typicode.com/comments/?email=${email}&name=${name}`
        )
    ).data;
    return commentData;
};
const getUserPosts = async (postid) => {
    const postData = (
        await axios.get(`https://jsonplaceholder.typicode.com/posts/?id=${postid}`)
    ).data;
    return postData;
};
const getUserData = async (userid) => {
    const userData = (
        await axios.get(`https://jsonplaceholder.typicode.com/users/?id=${userid}`)
    ).data;
    

    return userData;
};
app.get('/comments/:email/:name',async(req,res)=>{
    const email = req.params.email
    const name = req.params.name
    //console.log(name);
  const commentData=await getUserComments(email,name)
    //console.log(commentData);  
    if(commentData.length){
    const postid=commentData[0].postId
    //console.log(postid);
    const postData = await getUserPosts(postid)
    //console.log(postData);
    const userid = postData[0].userId
    //console.log(userid);
    const userData = await getUserData(userid)
    const finalObj={username:userData[0].username,name:userData[0].name,email:userData[0].email}
    res.send(finalObj)}else{
    return res.send('invalid details')}
})

app.listen(3000,()=>{
    console.log('port started');
})