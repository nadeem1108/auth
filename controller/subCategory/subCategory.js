const SubCategory = require("../../modules/subCategory/subCategory")



module.exports=(req, res, next)=>{
    var {title,src,des}= req.body;

  
        
            var subCategory = new SubCategory({
                
                title:title,
                src:src,
                des:des,
                createdDate:new Date(),
                status:1
                
              });
              subCategory.save()
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


