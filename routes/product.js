var express = require('express');
var router = express.Router();

/* GET home page. */ // 二级路由
router.get('/', function(req, res) {
    res.render('products/list',{ title: '产品管理页面' });
});

// /products/add
router.get("/add",(req,res)=>{
    res.render("products/add",{title:"添加新产品"})
})

//get post delete put
router.get("/update",(req,res)=>{
    res.render("products/update",{title:"更新产品"})
})

//products/api
router.get("/api",(req,res)=>{
    //res.render html
    //res.send text
    //res.json/jsonp
    res.jsonp({title:"iphone "})
})

module.exports = router;
