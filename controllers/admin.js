const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false

  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
 const product=new Product(title,price,description,imageUrl);
  product
  .save()
  .then(result=>{console.log('created product');
  res.redirect('/admin/products');
})
  .catch(err=> console.log(err));
};

// exports.getEditProduct = (req, res, next) => {
//   const editMode=req.query.edit;
//   if(!editMode){
//      return res.redirect('/');
//   }
//   const prodId=req.params.productId;
//   req.user
//   .getProducts({where : {id:prodId}})
//   .then(product=>{
//     if(!product[0]){
//       return res.redirect('/');
//     }
//     res.render('admin/edit-product', {
//       pageTitle: 'Edit Product',
//       path: '/admin/edit-product',
//       editing: editMode,
//       product: product[0]
//     });
//   })
//   .catch(err => console.log(err));
// };

exports.postEditProduct=(req,res,next) => {
 const prodId=req.body.productId;
 const updateTitle=req.body.title;
 const updateprice=req.body.price;
 const updateImageUrl=req.body.imageUrl;
 const updateDesc=req.body.description;
 Product.findByPk(prodId)
  .then(product=>{
    product.title=updateTitle;
    product.price=updateprice;
    product.description=updateDesc;
    product.imageUrl=updateImageUrl;
     return product.save();
  })
  .then(result=> {
    console.log('updated product');
    res.redirect('/admin/products');
})
  .catch(err=> console.log(err));
 
};

exports.getProducts = (req, res, next) => {
 req.user.getProducts()
  .then(products=>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err=>{
    console.log(err)
  });
};

exports.postDeleteProduct=(req, res,next)=>{
  const prodid=req.body.productId;
  Product.findByPk(prodid)
  .then(product=>{
    return product.destroy();
  })
  .then( result=>{
    console.log('deleted product');
    res.redirect('/admin/products');
  })
  .catch(err=>console.log(err));
};