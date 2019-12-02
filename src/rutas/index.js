const express = require('express');
const router = express.Router();
const Task = require('../models/task');



router.get('/', (req,res) => {
    res.render('index');
});



router.post('/add', async(req , res) =>{
    //en el req.body estan los datos en formato json
    const task = new Task(req.body);
    await task.save();
    res.send('recibido jeje');
});


module.exports = router;