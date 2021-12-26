import express from "express";
import { getNotifs, getNotifID, saveNotif, updateNotif, deleteNotif } from "../controllers/notificationController.js";
const router = express.Router();
//get all
router.get('/', getNotifs);
//create post
router.post('/', saveNotif);
//getByID
router.get('/:id', getNotifID);
//updateByID
router.patch('/:id', updateNotif);
//deleteByID
router.delete('/:id', deleteNotif);

export default router;