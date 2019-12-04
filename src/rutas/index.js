const express = require('express');
const router = express.Router();
const Task = require('../models/task');



router.get('/', async (req,res) => {
    
    res.render('index');
});

router.get('/eventos/add', (req,res) => {
    res.render('create/crear');
});



router.get('/eventos/view',async (req,res) => {
 const tasks = await Task.find();
    res.render('mostrar',{
        tasks
    });
});

router.post('/add', async(req , res) =>{
    //en el req.body estan los datos en formato json
    const task = new Task(req.body);
    await task.save();
    res.redirect('/eventos/view');
});


module.exports = router;