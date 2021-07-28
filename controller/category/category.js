const Category = require("../../modules/category/category")



module.exports=(req, res, next)=>{
    var {title,src,des}= req.body;

  
        
            var category = new Category({
                
                title:title,
                src:src,
                des:des,
                createdDate:new Date(),
                status:1
                
              });
              category.save()
            .then((result)=>{
                res.status(201).json({
                    msg:"SUCCESS",
                    result:result
                });
            })
            .catch((err)=>{
                res.json({
                    msg:"FAIL",
                    err:err,
                })
            })
        }


