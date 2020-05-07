const router = require("express").Router();
const Task = require("../models/task");

router.get('/',async (req,res)=>{

    var task = await Task.find();

    res.render('index',{task})

})
 
router.post("/add" ,(req,res)=>{
    var task = new Task(req.body);
    task.save(function(err){
        console.log(err);
    })

    res.redirect('/')
})

router.get("/delete/:id",async (req,res)=>{
    let  {id} = req.params;
    await Task.remove({_id : id});
    res.redirect("/")
})


router.get('/update/:id', async (req,res)=>{
    var task = await Task.findById(req.params.id);
    res.render("update",{task})
})

router.post('/update/:id', async (req,res)=>{
    let {id} = req.params;

    await Task.update({_id : id},req.body);

    res.redirect("/")
})

module.exports = router;
