const Categoryes = require("../../models/Categori");

exports.getCategory = async (req, res, next) => {
  const category = await Categoryes.findAll({
    attributes: ["id", "name"], // Thêm nhìêu dữ liệu
  });
  res.status(200).json({
    data: category,
  });
};



exports.getOneCategory = async (req, res, next) => {
  const id = parseInt(req.params.id);
  console.log(id);
  if (isNaN(id)) {
    return res.status(404).json({
      message: "Invalid id",
      data: [],
    });
  }

  const category = await Categoryes.findByPk(id, {
    attributes: ["id", "name"] // Thêm nhìêu dữ liệu
  });
  res.status(200).json({
    massages: "success",
    data: category,
  });
};



exports.postCategory = async (req, res) => {
  // console.log(req.body);
  let category = {
    name: req.body.name,
  };

  const categoryResponse = await Categoryes.create(category, {
    fields: ["name"],
  });

  res.status(201).json({
    message: "successfully",
    data: categoryResponse,
  });
};



// exports.updateProducts = async (req, res, next) => {
//   const id = parseInt(req.params.id);
//   console.log(id);
//   if (isNaN(id)) {
//     return res.status(404).json({
//       message: "Invalid id",
//       data: [],
//     });
//   }

//   let product = {
//     name: req.body.name,
//     price: req.body.price,
//     description: req.body.description,
//     image: req.file ? req.file.path : null,
//     category_id: req.body.category_id,
//   };

//   const [updateSP] = await Product.update(product, {
//     where: { id: id },
//     returning: true,
//   });
//   res.status(200).json({
//     massages: "success",
//     data: updateSP,
//   });
// };


// exports.deleteProducts = async (req, res, next) => {
//   const id = parseInt(req.params.id);
//   console.log(id);
//   if (isNaN(id)) {
//     return res.status(404).json({
//       message: "Invalid id",
//       data: [],
//     });
//   }

//   const deleteSP = await Product.destroy({ where: { id: id } });
//     res.status(200).json({
//     massages: "success",
//     data: deleteSP,
//   });
// };
