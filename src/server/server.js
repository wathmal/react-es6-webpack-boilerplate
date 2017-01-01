/**
 * Created by wathmal on 11/30/16.
 */
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import Api from './api';


const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log("node env: "+ process.env.NODE_ENV);

app.use('/api', Api );
app.get('*', function response(req, res) {

    res.sendFile(path.join(__dirname, 'index.html'));
});

const port= process.env.PORT || 3000;
app.listen(port);