const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.json());
const courses = [
    {id: 1 , name:'course one'},
    {id: 2 , name:'course two'},
    {id: 3 , name:'course three'}
];



app.get('/', (req, res) =>{
    res.send('Hello world');
});

app.get('/api/courses/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)
    res.status(404).send('404 Object not found :(');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const course = {
            id: courses.length++,
            name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

app.listen(PORT, (err, result) => {
    if (err)
    throw err
    console.log(`server started at PORT: ${PORT}` );
    
});