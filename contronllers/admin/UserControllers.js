const Users = require("../../models/User");

const users = [
  
];
exports.getUsers = async (req, res, next) => {
  const user = await Users.findAll({
    attributes: ["id", "username", "password", "email", "full_name", "role"], // Thêm nhìêu dữ liệu
  });

  console.log(user);
  res.render("admin/user/list", {
    users: user,
  });
};



exports.getAddUsers = async (req, res, next) => {
  try {
    const users = await Users.findAll();
    res.render("admin/user/add", { users });
  } catch (error) {
    next(error);
  }
};



exports.postUsers = async (req, res, next) => {
  let user = {
    username: req.body.username,
    password: req.body.password,
    password: req.body.email,
    full_name: req.body.full_name,
    role: req.body.role,
  };

  const userResponse = await Users.create(user, {
    fields: ["username", "password", "password", "full_name", "role"],
  });
  res.redirect("/admin/users");
};



exports.getEditUsers = async (req, res, next) => {
  try {
    const userId = req.params.id; 
    const user = await Users.findByPk(userId); 

    res.render("admin/user/edit", { user }); 
  } catch (error) {
    next(error);
  }
};




// exports.updateProducts = async (req, res, next) => {
//   const productId = req.params.id;
//   const updatedProduct = {
//     name: req.body.name,
//     price: req.body.price,
//     description: req.body.description,
//     image: req.file ? req.file.path : null,
//     category_id: req.body.category_id,
//   };

//   try {
//     await Product.update(updatedProduct, {
//       where: {
//         id: productId
//       }
//     });
//     res.redirect("/admin/products");
//   } catch (error) {
//     next(error);
//   }
// };



// exports.deleteProducts = async (req, res, next) => {
//   const productId = req.params.id;
//   try {
//     await Product.destroy({ where: { id: productId } });
//     res.sendStatus(200);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
