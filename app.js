require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose')
const Blog = require('./models/blog');
const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');
const cookieParser = require('cookie-parser');
const { checkForAuthenticationCookie } = require('./middlewares/auth');

const app = express();
const PORT = process.env.PORT || 8000;

// mongoDB connect
mongoose.connect(process.env.MONGO_URL).then((e)=>{
    console.log("mongodb connected")
})

//Middlewares setup
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie('token'));
app.use(express.static(path.resolve('./public')));

app.get('/', async (req, res)=>{
    const allBlogs = await Blog.find({});
    res.render('home', {
        user: req.user,
        blogs: allBlogs,
    })
})

app.use('/user', userRoute)
app.use('/blog', blogRoute)

app.listen(PORT, ()=> console.log(`Server listened at port: ${PORT}`));
