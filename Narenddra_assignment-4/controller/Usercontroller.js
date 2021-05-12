const products = [];
exports.addduserPage = (req,res,next) =>{
    res.render('adduser');
}

exports.userList = (req,res,next) => {
    products.push({'username' :req.body.username,'email' :req.body.email, password:req.body.password})
    res.render('userlist',{products});
}