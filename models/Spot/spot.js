import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SpotSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

export default mongoose.model('spot', SpotSchema)
