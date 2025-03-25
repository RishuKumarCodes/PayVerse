import {Router} from 'express';
import verify from "../Middlewares/authUser.js";
import { getBalance,transferMoney } from '../Controllers/bankCotroller.js';


const bankRouter = Router()


bankRouter.get('/balance',verify,getBalance);
bankRouter.post('/transfer',verify,transferMoney);

export default bankRouter;