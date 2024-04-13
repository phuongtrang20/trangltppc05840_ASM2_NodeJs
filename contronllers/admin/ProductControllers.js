const Product = require("../../models/Product");
const Category = require("../../models/Categori");

const products = [
  
];
exports.getProducts = async (req, res, next) => {
  const product = await Product.findAll({
    attributes: ["id", "name", "price", "description", "image"], // Thêm nhìêu dữ liệu
  });

  console.log(product);
  res.render("admin/product/list", {
    products: product,
  });
};



exports.getAddProducts = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.render("admin/product/add", { categories });
  } catch (error) {
    next(error);
  }
};



exports.postProducts = async (req, res, next) => {
  let product = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.file ? req.file.path : null,
    category_id: req.body.category_id,
  };

  const productResponse = await Product.create(product, {
    fields: ["name", "price", "description", "image", "category_id"],
  });
  res.redirect("/admin/products");
};



exports.getEditProducts = async (req, res, next) => {
  try {
    const productId = req.params.id; 
    const product = await Product.findByPk(productId); 
    const categories = await Category.findAll();

    res.render("admin/product/edit", { product, categories }); 
  } catch (error) {
    next(error);
  }
};




exports.updateProducts = async (req, res, next) => {
  const productId = req.params.id;
  const updatedProduct = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.file ? req.file.path : null,
    category_id: req.body.category_id,
  };

  try {
    await Product.update(updatedProduct, {
      where: {
        id: productId
      }
    });
    res.redirect("/admin/products");
  } catch (error) {
    next(error);
  }
};



exports.deleteProducts = async (req, res, next) => {
  const productId = req.params.id;
  try {
    await Product.destroy({ where: { id: productId } });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
