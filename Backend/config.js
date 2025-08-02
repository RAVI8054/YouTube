import dotenv from 'dotenv';
dotenv.config();

// Export individual configuration values
export const PORT = process.env.PORT || 8000;

export const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://ravimrvr:EVuFT85SmywxcBnh@youtube.lksyi2l.mongodb.net/';

export const JWT_SECRET = process.env.JWT_SECRET || 'vermaJi';


