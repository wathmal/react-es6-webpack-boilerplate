/**
 * Created by wathmal on 3/5/17.
 */

// SSR
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import Landing from './../client/components/Landing/Landing';

function handleRender(req, res) {

    const html = ReactDOMServer.renderToString(
        <Landing />
    );

    //console.log(path.join(__dirname, './../client/index.html'));
    fs.readFile(path.join(__dirname, './index.html'), 'utf8', function (err, file) {
        if (err) {
            return console.log(err);
        }
        const document = file.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);
        res.send(document);
    });
}

export default handleRender;