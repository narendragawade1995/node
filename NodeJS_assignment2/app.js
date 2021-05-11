const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('on first middleware ')
    next();
})

app.use((req,res,next)=>{
    console.log('on second middleware');
    next();
})


app.use('/users',(req,res,next)=>{

    res.send(`<ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
            <li>User 4</li>
            <li>User 5 </li>
            <li>User 6</li>
            </ul>`);
});

app.use('/',(req,res,next)=>{
    res.send("<p>welcome  to my first node express Application </p><a href='/users'>Go to user list</a>");
});



app.listen(4000);
