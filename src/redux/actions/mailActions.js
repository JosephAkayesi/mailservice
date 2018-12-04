import { SEND_MAIL } from './types';
import axios from 'axios';

export const sendMail = (mailData, success, failure) => dispatch => {
    axios.post('/message/send', mailData)
        .then(mail => dispatch({
            type: SEND_MAIL,
            payload: mail.data
        }))
        .then(success)
        .catch(err => {
            console.log(err.message);
            failure();
        });
}