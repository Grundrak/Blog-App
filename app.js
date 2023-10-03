const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const blogPost = [
    {
        id: 1,
        title: 'Test post',
        img: 'dj.jpg',
        text: 'i wanna try to see this text on my blog',
      },
      {
        id: 2,
        title: 'Test post 2',
        img: 'dj.jpg',
        text: 'i wanna try to see this text on my blog',
      },
      {
        id: 3,
        title: 'Test post 3',
        img: 'dj.jpg',
        text: 'i wanna try to see this text on my blog',
      },
]
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/post',(req,res) =>{
    res.render('blog', {blogPost});
});

app.get("/post/:id", (req, res) => {
    let post = blogPost.find(
      (post) => post.id === parseInt(req.params.id)
    );
    if (post) {
      res.render('postDetails',{post : post});
    } else {
      res.status(404).send();
    }
  });
  app.delete("/post/:id", (req, res) => {
    let post = blogPost.find(
      (post) => post.id === parseInt(req.params.id)
    );
    if (post !== -1) {
     blogPost.splice(post, 1);
      res.Status(200).send('The blog as delete with succces');
    } else {
      res.Status(404).send('Sorry but the blog didint delete');
    }
  });
app.post('/post',(req,res) =>{
    const addPost = {id: blogPost.lenght++,title, img ,text}
    blogPost.push(addPost);
    if(addPost){
        res.status(201).send("Done the new post added")
    }else {
        res.status(400).send("Error in post repost please")
    }
}); 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});