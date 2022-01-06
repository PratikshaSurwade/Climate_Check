const express =  require('express');
const  path  = require('path');
const hbs = require('hbs')
const app =  express();
const port = process.env.PORT || 3000  //For hosting purpose it will check for this port and if not available it will go to local 3000


//public static path
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

console.log(path.join(__dirname,"../public"));

app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));



//routing
app.get("", (req , res ) => {
    res.render('index')
})

app.get("/about", (req , res ) => {
    res.render('about')
})

app.get("/weather", (req , res ) => {
    res.render('weather')
})

app.get("*", (req , res ) => {
    res.render('404error' , {
        errorMsg : 'Opps! Page Not Found'
    })
})

app.listen(port ,() => {
    console.log(`Listening to port at ${port}`);
})