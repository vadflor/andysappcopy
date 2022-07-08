import { lazy } from 'react';

const Content = lazy(() =>
    import('../components/Content/Content')
        .then(({ Content }) => ({ default: Content })),
);
const AllProducts = lazy(() =>
    import('../components/AllProducts/AllProducts')
        .then(({ AllProducts }) => ({ default: AllProducts })),
);

const Login = lazy(() =>
    import('../pages/Login')
        .then(({ Login }) => ({ default: Login })),
);
const Registration = lazy(() =>
    import('../pages/Registration')
        .then(({ Registration }) => ({ default: Registration })),
);


const routes = [
    {
        path: "/",
        component: Content
    },
    {
        path: "/:locale",
        component: Content
    },
    {
        path: "/:locale/products",
        component: AllProducts
    },
    {
        path: "/:locale/products/:product/",
        component: AllProducts
    },
    {
        path: "/:locale/menu",
        component: Content
    },
    {
        path: "/:locale/restaurants",
        component: Content
    },
    {
        path: "/:locale/services",
        component: Content
    },
    {
        path: "/:locale/news",
        component: Content
    },
    {
        path: "/:locale/services/:service",
        component: Content
    },
    {
        path: "/:locale/menu-in-restaurant",
        component: Content
    },
    {
        path: "/:locale/login",
        component: Login
    },
    {
        path: "/:locale/registration",
        component: Registration
    },
    {
        path: "/:locale/products/:product/:name",
        component: Content 
    },
    {
        path: "/:locale/products/:product/:name",
        component: AllProducts 
    },
  
    // {
    //   path: '*',
    //   component: NotMatchPage,
    // },

];

export default routes;