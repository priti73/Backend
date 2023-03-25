// const Sequelize=require('sequelize');
// const sequelize=new Sequelize('pritidb','root','Priti@3298',{
//     dialect: 'mysql',
//     host: 'localhost'
//  });
// // const sequelize=new Sequelize('expense','root','PFH#23kgrw9',{
// //     dialect: 'mysql',
// //     host: 'localhost'
// // });
// module.exports=sequelize;



const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;

let _db;

const mongoConnect=(callback)=>{
    MongoClient.connect('mongodb+srv://Priti:KKkXFbCbwNNmZcqK@cluster0.qcc5swb.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client=>{
       console.log('Connected');
       _db=client.db();
       callback();
    })
    .catch(err=>{
        console.log(err);
        throw err;
    });  
}

const getDb=()=>{
    if(_db){
        return _db;
    }
    throw "No database exist"
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;
