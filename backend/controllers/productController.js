import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  let products = await Product.find({});
  res.send(products);
};

export const getNewCollections = async (req, res) => {
  let products = await Product.find({});
  let arr = products.slice(-8);
  res.send(arr);
};

export const getPopularInWomen = async (req, res) => {
  let products = await Product.find({ category: "women" });
  let arr = products.slice(0, 4);
  res.send(arr);
};

export const getRelatedProducts = async (req, res) => {
  const { category } = req.body;
  const products = await Product.find({ category });
  const arr = products.slice(0, 4);
  res.send(arr);
};

export const addProduct = async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  await product.save();
  res.json({ success: true, name: req.body.name });
};

export const removeProduct = async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({ success: true, name: req.body.name });
};