import { Router } from "express";
import {saveFormDesign, viewForm} from "../controller/form.controller.js";

const router = Router();

router.route('/save').post(saveFormDesign);
router.route("/view/:id").get(viewForm)

export default router;