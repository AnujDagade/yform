import { Router } from "express";
import {saveFormDesign} from "../controller/form.controller.js";

const router = Router();

router.route('/save').post(saveFormDesign);

export default router;