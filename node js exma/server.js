const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

const authRoute = require('./routes/authRoutes');
const blogRoute = require('./routes/blogRoutes');

app.use('/api/auth', authRoute);
app.use('/api/blogs', blogRoute);

app.listen(process.env.PORT, () => {
    console.log("server started on 5001");
});
