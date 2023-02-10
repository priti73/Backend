const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const User=sequelize.define('user',{
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
   emailid:{
    type: Sequelize.STRING,
    allowNull:false,
    unique:true
        },
   phonenumber:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true
      },
   username:{
    type: Sequelize.STRING,
    allowNull:false
   }
});

module.exports =User;