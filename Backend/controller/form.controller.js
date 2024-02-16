import { log } from 'console';

const saveFormDesign = async (req, res) => {
    log('saveFormDesgin');
    res.status(200).send({ message: 'Form design saved successfully' });
}


export { saveFormDesign };