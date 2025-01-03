import React, { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { Plus, Pencil, Trash2 } from 'lucide-react';

const Products = ({ products = [], setProducts = () => {} }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    stock: '',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: Date.now().toString() }]);
    setNewProduct({ id: '', name: '', category: '', price: '', stock: '', image: null });
    setImagePreview(null);
  };

  const handleEditProduct = (product) => {
    setIsEditing(true);
    setCurrentProduct(product);
    setNewProduct(product);
    setImagePreview(product.image ? URL.createObjectURL(product.image) : null);
  };

  const handleUpdateProduct = () => {
    setProducts(products.map((product) => (product.id === currentProduct.id ? newProduct : product)));
    setIsEditing(false);
    setCurrentProduct(null);
    setNewProduct({ id: '', name: '', category: '', price: '', stock: '', image: null });
    setImagePreview(null);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewProduct({ ...newProduct, image: file });
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="fixed h-full">
        <Sidebar />
      </div>
      <div className="flex-grow p-6 ml-64">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Products</h1>
        <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">{isEditing ? 'Edit Product' : 'Add Product'}</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              isEditing ? handleUpdateProduct() : handleAddProduct();
            }}
          >
            <div className="grid grid-cols-1 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Category"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="number"
                placeholder="Stock"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })}
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="file"
                onChange={handleImageChange}
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {imagePreview && (
                <img src={imagePreview} alt="Product Preview" className="w-32 h-32 object-cover mt-2 rounded" />
              )}
            </div>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
              {isEditing ? 'Update Product' : 'Add Product'}
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Product List</h2>
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Stock</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-100 transition">
                  <td className="py-2 px-4 border-b">{product.name}</td>
                  <td className="py-2 px-4 border-b">{product.category}</td>
                  <td className="py-2 px-4 border-b">${product.price.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b">{product.stock}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="text-blue-600 hover:text-blue-800 mr-2"
                    >
                      <Pencil className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;