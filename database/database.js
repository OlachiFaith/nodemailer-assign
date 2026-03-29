//  Import mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://okereolachifaith258_db_user:osLeSvuXcLTevAv5@cluster0.4sdc0nj.mongodb.net/')
.then(() => {
    console.log('Database connected successfully');
    
})
.catch((error) => {
    console.log(error.message);
    
})