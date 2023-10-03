const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const blogPost = [
    {
        id: 1,
        title: 'Test post',
        picture: 'AA.jpg',
        text: 'i wanna try to see this text on my blog',
      },
]
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/post',(req,res) =>{
    res.render('blog', {blogPost});
});
app.get('/post',(req,res) =>{
    res.send('post')
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});