const Category = require("../../models/Categori");

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      attributes: ["id", "name"],
    });

    res.render("admin/categori/list", {
      categories: categories,
    });
  } catch (error) {
    next(error);
  }
};


exports.getAddCategories = async (req, res, next) => {
  try {
    const categori = await Category.findAll();
    res.render("admin/categori/add", { categori });
  } catch (error) {
    next(error);
  }
};


exports.postCategories = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).send("Vui lòng nhập tên danh mục");
  }

  Category.create({
    name: req.body.name
  })
  .then(() => {
    res.redirect("/admin/categori");
  })
  .catch(error => {
    next(error);
  });
};





exports.getEditCategories = async (req, res, next) => {
  try {
    const cateroriId = req.params.id;
    const categori = await Category.findByPk(cateroriId);
    const categories = await Category.findAll();
    
    res.render("admin/categori/edit", { categori, categories });
    
  } catch (error) {
    next(error);
  }
};

exports.updateCategories = async (req, res, next) => {
  const categoriId = req.params.id;
  const updatedCategori = {
    name: req.body.name
  };

  try {
    await Category.update(updatedCategori, {
      where: {
        id: categoriId,
      },
    });
    res.redirect("/admin/categori");
  } catch (error) {
    next(error);
  }
};

exports.deleteCategories = async (req, res, next) => {
  const categoriId = req.params.id;
  try {
    await Category.destroy({ where: { id: categoriId } });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
