const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const mongoConnect=require('./util/database').mongoConnect;
// const Product=require('./models/product');
// const User=require('./models/user');
// const Cart=require('./models/cart');
// const CartItem=require('./models/cart-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
    // User.findByPk(1).then(user=>{
    //     req.user=user;
    //     next();
    // })
    // .catch(err=> console.log(err));
    next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

 app.use(errorController.get404);
// Product.belongsTo(User,{constraints: true, onDelete: 'CASCADE'});
// User.hasMany(Product);
// User.hasOne(Cart);
// Cart.belongsTo(User);
// Cart.belongsToMany(Product,{ through: CartItem});
// Product.belongsToMany(Cart,{ through: CartItem});




//sequelize
//.sync({force: true})
// .sync()
// .then(result=>{
//      return User.findByPk(1);
//    //console.log(result); 
 
// })
// .then(user=>{
//     if(!user){
//        return  User.create({name: 'SONI',email:'test@gmail.com'});
//         }
//         return  user;
// })
// .then(user=>{
//  //console.log(user);
//  return user.createCart();
//  })
// .then(cart=>{
//     app.listen(3000);
// })
// .catch(err=>{
//     console.log(err);
// });

mongoConnect(()=>{
    
    app.listen(3000);
  })
/*

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize=require('./util/database');
const User=require('./models/user');
var cors =require('cors');

const app = express();
app.use(cors());

// app.set('view engine', 'ejs');
// app.set('views', 'views');

const userRoutes = require('./routes/user');


app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(userRoutes);
app.use(errorController.get404);

sequelize
.sync()
.then(result=>{
   app.listen(3000);
})
.catch(err=>{
    console.log(err);
});



const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
//const sequelize=require('./util/database');
//const User=require('./models/expense');

const mongoConnect=require('./util/database');
var cors =require('cors');

const app = express();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

//const expenseRoutes = require('./routes/expense');


app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//app.use(expenseRoutes);
//app.use(errorController.get404);

// sequelize
// .sync()
// .then(result=>{
//    app.listen(3000);
// })
// .catch(err=>{
//     console.log(err);
// }); 
mongoConnect(client=>{
    console.log(client);
    app.listen(3000);
  })
  
/*
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize=require('./util/database');
const User=require('./models/users');
var cors =require('cors');

const app = express();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

const usersrouteRoutes = require('./routes/users');


app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(usersrouteRoutes);
app.use(errorController.get404);

sequelize
.sync()
.then(result=>{
   app.listen(3000);
})
.catch(err=>{
    console.log(err);
}); 





*/