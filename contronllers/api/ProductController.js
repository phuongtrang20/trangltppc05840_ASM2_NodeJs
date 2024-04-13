const Product = require("../../models/Product");

exports.getProducts = async (req, res, next) => {
  const product = await Product.findAll({
    attributes: ["id", "name", "price", "description", "image", ], // Thêm nhìêu dữ liệu
  });
  res.status(200).json({
    data: product,
  });
};



exports.getOneProducts = async (req, res, next) => {
  const id = parseInt(req.params.id);
  console.log(id);
  if (isNaN(id)) {
    return res.status(404).json({
      message: "Invalid id",
      data: [],
    });
  }

  const product = await Product.findByPk(id, {
    attributes: ["id", "name", "price", "description", "image", "category_id"] // Thêm nhìêu dữ liệu
  });
  res.status(200).json({
    massages: "success",
    data: product,
  });
};



exports.postProducts = async (req, res) => {
  // console.log(req.body);
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
};



exports.updateProducts = async (req, res, next) => {
  const id = parseInt(req.params.id);
  console.log(id);
  if (isNaN(id)) {
    return res.status(404).json({
      message: "Invalid id",
      data: [],
    });
  }

  let product = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.file ? req.file.path : null,
    category_id: req.body.category_id,
  };

  const [updateSP] = await Product.update(product, {
    where: { id: id },
    returning: true,
  });
  res.status(200).json({
    massages: "success",
    data: updateSP,
  });
};


exports.deleteProducts = async (req, res, next) => {
  const id = parseInt(req.params.id);
  console.log(id);
  if (isNaN(id)) {
    return res.status(404).json({
      message: "Invalid id",
      data: [],
    });
  }

  const deleteSP = await Product.destroy({ where: { id: id } });
    res.status(200).json({
    massages: "success",
    data: deleteSP,
  });
};
