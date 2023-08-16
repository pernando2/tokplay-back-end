require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const mongoString = process.env.DATABASE_URL;
const app = express();
app.use(cors()); // Mengaktifkan CORS untuk semua permintaan
// mongoose.connect(mongoString);
const database = mongoose.connection;

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(mongoString);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
}
  
// database.on('error', (error) => {
//     console.log(error);
// })
// database.once('connected', () => {
//     console.log("Database Connected");
// })

const routes = require('./src/routes/routes')
app.use(express.json());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
}),
)

app.use('/api', routes)

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server started at http://localhost:${process.env.PORT}/`);
    })
})

// app.listen(process.env.PORT, () => {
//     console.log(`Server started at http://localhost:${process.env.PORT}/`)
// })