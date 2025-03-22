import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudniry.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


// Config App
const app = express();
const port = process.env.PROT || 4000;
connectDB();
connectCloudinary();




// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.get('/', (req, res) => {
    res.send("Backend Working")
});


app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/product', productRouter);
app.use('/api/orders', orderRouter)

app.listen(port, () => console.log('Server Started on PORT : ' + port))