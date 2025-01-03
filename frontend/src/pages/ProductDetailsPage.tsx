import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import type { Product } from '../types';

interface ProductDetailsPageProps {
  products: Product[];
  onAddToCart: (product: Product, size?: string, color?: string) => void;
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ products, onAddToCart }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === productId);

  const [selectedSize, setSelectedSize] = useState(product?.size?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.color?.[0] || '');

  if (!product) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-600">Product not found</p>
      </div>
    );
  }

  const similarProducts = products.filter(p => product.similar.includes(p.id));

  const handleSimilarProductClick = (similarProductId: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/product/${similarProductId}`);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative h-96 md:h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
              </div>

              {product.size && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Size
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {product.size.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 px-4 text-sm font-medium rounded-md ${
                          selectedSize === size
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.color && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Color
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {product.color.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`py-2 px-4 text-sm font-medium rounded-md ${
                          selectedColor === color
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => onAddToCart(product, selectedSize, selectedColor)}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dummy Reviews */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              <p className="text-gray-800 font-semibold">John Doe</p>
              <p className="text-gray-600">Great product! Highly recommend.</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-800 font-semibold">Jane Smith</p>
              <p className="text-gray-600">Good quality, but a bit expensive.</p>
            </div>
            <div>
              <p className="text-gray-800 font-semibold">Alice Johnson</p>
              <p className="text-gray-600">Loved it! Will buy again.</p>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Similar Products</h2>
          {similarProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {similarProducts.map(similarProduct => (
                <div
                  key={similarProduct.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => handleSimilarProductClick(similarProduct.id)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={similarProduct.image}
                      alt={similarProduct.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{similarProduct.name}</h3>
                    <span className="text-xl font-bold text-gray-900">${similarProduct.price.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No similar products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;