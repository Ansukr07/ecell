import mongoose from 'mongoose';

const hitCounterSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
    default: 0,
  },
  lastHit: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

export default mongoose.models.HitCounter || mongoose.model('HitCounter', hitCounterSchema);
