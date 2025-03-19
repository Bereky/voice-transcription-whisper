import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const callSchema = new Schema({
    fileName: { type: String, required: true },
    duration: { type: Number, required: true },
    transcription: { type: String, required: true },
    analytics: { type: Object, required: true }
});

const Call = mongoose.model('Call', callSchema);

export default Call

