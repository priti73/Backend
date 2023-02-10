const User = require('../models/user');

exports.postUser=async (req,res,next)=>{
    try{
 
       if(!req.body.emailInput || !req.body.nameInput || !req.body.phonenumber){
          throw new Error('Plz fill all the fields')
       }
     const name=req.body.nameInput;
     const email=req.body.emailInput;
     const phonenumber=req.body.phonenumber;
     
      const data =await User.create({
         username:name,
         emailid:email,
         phonenumber: phonenumber
      });
      console.log('new user');
      res.status(201).json({newuser:data});
    }
    catch(err){
       res.status(500).json({
          error: err
       })
    }
 }

 
exports.getUser = async (req, res, next) => {
   try{
        const users=await User.findAll();
        console.log('get user');
        res.status(201).json({allusers: users});
      }
   
   catch(err){
      res.status(500).json({
         error: err
   })
 }
}

exports.deleteUser = async (req, res, next) => {
   try{
        const userId=req.params.id;
        await User.destroy({where: {id: userId}});
        console.log('delete user');
        res.status(201).json({userId:userId});
      }
   
   catch(err){
      res.status(500).json({
         error: err
   })
 }
}