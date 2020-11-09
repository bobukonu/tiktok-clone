import mongoose from 'mongoose';

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    description: String,
    likes: String,
    shares: String,
    messages: String,
});

//Collection inside the database
export default mongoose.model('tiktokVideos', tiktokSchema);