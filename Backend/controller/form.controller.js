import { log } from 'console';
import {Form} from '../models/form.model.js'

const saveFormDesign = async (req, res) => {
    log('saveFormDesgin');
    console.log(req.body);
    await Form.create(req.body)
    const insertedData = await Form.find()
    res.status(200).send({ message: insertedData||"Success" });
}


export { saveFormDesign };