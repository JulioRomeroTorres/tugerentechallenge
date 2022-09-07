import { Router } from "express";
import {methods as routerMethods} from '../controllers/controller.js'

const router = Router();

// Define Endpoints
// Get Total information about the Reservations
router.get('/', routerMethods.getTotalbooks);

//Create, update and Delete Resevation
router.get('/book/:idBook', routerMethods.getInforeservation );
router.post('/book/:idBook', routerMethods.bookReservation);
router.put('/book', routerMethods.updateReservation);
router.delete('/book/:idBook', routerMethods.deleteReservation);

//Get and Update an specific information of User 
router.get('/book/:idBook/user/:idUser', routerMethods.getInfouser);
router.put('/book/:idBook/user/:idUser', routerMethods.updateUser);

router.put('/*', routerMethods.getTotalbooks);

export default router;