import * as Express from "express";
import * as bodyParser from 'body-parser';

import { matchRoutes} from 'react-router-config';

import Routes from '../client/Routes';
import renderer from '../helpers/renderer';
import createStore from '../helpers/createStore';

declare const module: any;

function main() {
    const express = Express();
    const port = process.env.PORT || 8080;

    express.use(Express.static("build"));
    express.use(bodyParser.json());
    express.use(bodyParser.urlencoded({ extended: true }));
    express.get(['/*/:param', '*'], (req, res, next) => {

        const ParamValue = req.params.param ? req.params.param : null;
 
        const store = createStore();

        const promises = matchRoutes(Routes, req.path)
        .map(({ route }:any) => {
          return route.loadData ? route.loadData(store, ParamValue) : null;
        })
        .map((promise) => {
          if (promise) {
            return new Promise((resolve) => {
              promise.then(resolve).catch(resolve);
            });
          }
        });

        Promise.all(promises).then(() => { 
            const context = {};
            const content = renderer(req, store, context);
            res.send(content);        
            res.end();       
            next();
        });
    });

    const server = express.listen(port);
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => server.close());
    }
}

main();
