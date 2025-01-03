import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  phone: { type: String, required: true },
});

const orderSchema = new mongoose.Schema({
  customer: { type: String, required: true },
  address: { type: addressSchema, required: true }, // Use the address schema
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  status: { type: String, default: 'Processing' },
  date: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;