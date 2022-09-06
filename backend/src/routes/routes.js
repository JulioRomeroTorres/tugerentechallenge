import { Router } from "express";
import {methods as routerMethods} from '../controllers/controller.js'

const router = Router();

// Define Endpoints

router.get('/', routerMethods.getTotalinfo);

router.get('/user/:id', routerMethods.getInfouser)

export default router;