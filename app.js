const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require("fs");
const methods = require('./public/index.js');

app.use(express.static('./public'));
app.use(bodyParser.json());
const postsPath = './server/posts.json';

for(method in methods){
    [].__proto__[method]=methods[method];
}

app.post('/posts', (req, res) => {
    const Posts = JSON.parse(fs.readFileSync(postsPath));
    const post = req.body;
    const posts = Posts.getPhotoPosts(Number(post.skip), Number(post.top), post.filterConfig);
    if(posts){
        res.send(JSON.stringify(posts));
        res.statusCode = 200;
    } else {
    res.send('Error');
    res.statusCode = 400;
    }
});

app.post('/post', (req, res) => {
    const Posts = JSON.parse(fs.readFileSync(postsPath));
    const post = req.body;
    post.createdAt = new Date(post.createdAt);
    if (Posts.addPhotoPost(post)) {
        fs.writeFileSync(postsPath, JSON.stringify(Posts));
        res.send('successful');
        res.statusCode=200;
    } else {
        res.send("Error");
        res.statusCode=400;
    }
})

app.get('/post/:id', (req, res) => {
    const Posts = JSON.parse(fs.readFileSync(postsPath));
    const post = Posts.getPhotoPost(`${req.params.id}`);
    if (post) {
        res.send(JSON.stringify(post));
        res.send('successful');
        res.statusCode=200;
    } else {
        res.send("Error");
        res.statusCode=400;
    }
})


app.put('/post/:id', (req, res) => {
    const Posts = JSON.parse(fs.readFileSync(postsPath));
    const editPost = req.body;
    const id = `${req.params.id}`;
    console.log(id, editPost);

    if (Posts.editPhotoPost(id, editPost)) {
        res.send("successful");
        fs.writeFileSync(postsPath, JSON.stringify(Posts));
        res.statusCode=200;
    } else {
        res.send("error");
        res.statusCode = 400;
    }
})

app.delete('/post/:id', (req, res) => {
    const Posts = JSON.parse(fs.readFileSync(postsPath));
    const id = `${req.params.id}`;
    if(Posts.removePhotoPost(id)){
        res.send("successful");
        fs.writeFileSync(postsPath, JSON.stringify(Posts));
        res.statusCode=200;
    }
    else{
        res.send("error");
        res.statusCode=400;
    }
})

app.use((req, res) => {
    res.sendFile('Error.html', { root: './public' });
});

app.listen(3000, () => {
    console.log('Server is running! Wait please...');
});