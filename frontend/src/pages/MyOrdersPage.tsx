import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Not authorized');
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:4000/api/orders/myorders', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 401) {
          setError('Not authorized');
          navigate('/login');
          return;
        }

        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Failed to fetch orders');
      }
    };

    fetchOrders();
  }, [navigate]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-500';
      case 'Processing':
        return 'text-yellow-500';
      case 'Shipped':
        return 'text-blue-500';
      case 'Cancelled':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItemCount={0} />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>
          <div className="bg-white rounded-lg shadow-lg p-6">
            {orders.length === 0 ? (
              <p className="text-gray-600">You have no orders.</p>
            ) : (
              <ul>
                {orders.map(order => (
                  <li key={order._id} className="mb-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-lg">Order ID: {order._id}</p>
                        <p className={`font-semibold ${getStatusColor(order.status)}`}>Status: {order.status}</p>
                        <p className="text-gray-700">Address: {order.address.street}, {order.address.city}, {order.address.state}, {order.address.zipCode}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">Total: ${order.total.toFixed(2)}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyOrdersPage;