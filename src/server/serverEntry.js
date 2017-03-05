/**
 * Created by wathmal on 3/5/17.
 */

// SSR
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path from 'path';

import { match, RouterContext } from 'react-router';
import routes from './../client/routes';

function handleRender(req, res) {

    match({ routes: routes, location: req.url }, (err, redirect, props) => {
        // `RouterContext` is what the `Router` renders. `Router` keeps these
        // `props` in its state as it listens to `browserHistory`. But on the
        // server our app is stateless, so we need to use `match` to
        // get these props before rendering.
        const html = ReactDOMServer.renderToString(<RouterContext {...props}/>);

        // dump the HTML into a template, lots of ways to do this, but none are
        // really influenced by React Router, so we're just using a little
        // function, `renderPage`
        // res.send(renderPage(appHtml))

        fs.readFile(path.join(__dirname, './index.html'), 'utf8', function (err, file) {
            if (err) {
                return console.log(err);
            }
            const document = file.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);
            res.send(document);
        });
    });

/*    const html = ReactDOMServer.renderToString(
        <Landing />
    );*/

    //console.log(path.join(__dirname, './../client/index.html'));

}

export default handleRender;