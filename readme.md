# react es6 boilerplate
`react ES6` boilerplate with webpack with `sass`.

## directory layout
```
.
├── bower.json
├── build
│   ├── index.html
│   └── public
├── package.json
├── pm2_process.json
├── readme.md
├── src
│   ├── client
│   │   ├── App.js
│   │   ├── client.js
│   │   └── components
│   └── server
│       ├── api.js
│       ├── config.js
│       └── server.js
├── webpack.config.js
└── webpack.config.production.js

```

## development
dependencies
```
sudo npm install -g babel-cli webpack babel-core bower
```

running
```bash
npm install
bower install
npm start
# run this on another terminal tab
webpack --watch --progress
```
run `webpack` command in another terminal in order to watch for changes.

visit `http://localhost:3000`.


## production
* you should have installed and configured `PM2` to auto start.
* bind nodejs to run on port 80.

follow below steps
```
# keep environment on development mode when running these
npm run build-server
webpack -p --config webpack.config.production.js --progress
pm2 start pm2_process.json
```
