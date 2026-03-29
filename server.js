const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5945;
require('./database/database');
const userRouter = require('./routes/userRouter')


const app = express();
app.use(express.json());
app.use(userRouter);

app.listen(PORT, ()=> {
    console.log(`Server listening to Port: ${PORT}`);
})