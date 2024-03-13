import connectDB from '../DB/connection.js';
import categoryRouter from './modules/categories/category.router.js';
import productRouter from './modules/products/product.router.js';

const initApp = (app,express)=>{
    app.use(express.json());
    connectDB();
    app.get('/',(req,res)=>{
        return res.status(200).json({message:"welcom"});
    });

    app.use('/categories',categoryRouter);
    app.use('/products',productRouter);

    app.get('*',(req,res)=>{
        return res.status(500).json({message:"page not found"});
    })
}

export default initApp;