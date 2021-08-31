const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());


const mockUserData = [
    {name:'Mark'},
    {name:'Jill'}
];

app.get('/users/', function(req, res){
        res.json({
            success: true,
            message: 'successfully got users',
            users: mockUserData
        })
});

app.get('/users/:id', function(req, res){
    console.log(req.params.id);
    res.json({
        success: true,
        messege: 'got one user',
        user: req.params.id
    })
})

app.post('/users/login', function(req, res){
    const username = req.params.name;
    const password = req.params.password;

    const mockName = "billy";
    const mockPasswor = "pass";

    if(username === mockName && password == mockPassword){
        res.json({
            success: true,
            message: 'match',
            token: 'encrypted token goes here'
        });
    }
    else{
        res.json({
            success: false,
            message: 'did not match'
        });
    }

})

app.listen(8000, function(){
    console.log("server is up and running")
});