import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  userId: { type: String, default: 'default_user' },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, default: 'Uncategorized' },
  date: { type: Date, default: Date.now },
  isAnomaly: {type: Boolean, default:false},
  categorySource:{type:String, default:'ai'},
  tags:{type:[String], default:[]}
});

export default mongoose.model('Transaction', transactionSchema);
