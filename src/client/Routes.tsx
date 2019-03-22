import App from '../common/App';
import HomePage from '../common/pages/Home/Home';
import Docs from '../common/pages/Docs/Docs';

import { RouteConfig } from "react-router-config";


const routes: RouteConfig[] = [
    {
        path: '/',
        ...App,
        exact: true,
        routes: [
            {
                ...HomePage
            }
        ]
    },
    {
        path: '/docs',
        ...App,
        routes: [
            {
                ...Docs
            }
        ]
    },

];

export default routes;


