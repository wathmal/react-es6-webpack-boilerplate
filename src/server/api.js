/**
 * Created by wathmal on 12/3/16.
 */

import express from 'express';
import config from './config';

const apiRouter = express.Router();


apiRouter.get('/', (req, res)=>{
    res.json({code: 200, message: config.name});
});

export default apiRouter;