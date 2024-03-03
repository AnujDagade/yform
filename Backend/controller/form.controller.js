import { log } from 'console';
import {Form} from '../models/form.model.js'

const saveFormDesign = async (req, res) => {
    log('saveFormDesgin');
    console.log(req.body);
    const data = await Form.create(req.body)
    
    res.status(200).send({ id:  data._id});
}

const viewForm = async (req, res) => {
    const form =  await Form.findById(req.params.id)
    res.status(200).send(form.formHTML);
}

export { saveFormDesign, viewForm };