var express = require('express');
var app = new express();
var ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.static('public'));

var lucas = {
    about: "I'm a third year student at USTH",
    skills: ['Python', 'Nodejs', 'Mongodb', 'HTML', 'CSS', 'Wordpress'],
    likes: ['Movies', 'Musics', 'Games', 'Books']
};

app.get('/', (req,res)=>{
    res.render('index',{
        lucas
    });
});

app.get('/about', (req, res)=>{
    res.render('about',{
        lucas
    });
});

app.get('/skills', (req, res)=>{
    res.render('skills',{
        lucas
    });
});

app.get('/likes', (req, res)=>{
    res.render('likes',{
        lucas
    });
});

app.listen(4000, ()=>{
    console.log('app listen on port 4000 hehe');
});