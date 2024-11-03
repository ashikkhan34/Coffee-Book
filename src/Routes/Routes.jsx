import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/Mainlayout';
import Home from '../Pages/Home';
import Coffes from '../Pages/Coffes';
import Dashborad from '../Pages/Dashborad';
import CoffeeCard from '../Components/CoffeeCard';
import CoffeDetails from '../Pages/CoffeDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
                loader: ()=> fetch('../categories.json'),
                children: [
                    {
                        path:'/',
                        element: <CoffeeCard></CoffeeCard>,
                        loader: ()=> fetch('../coffees.json')
                    },
                    {
                        path:'/category/:category',
                        element: <CoffeeCard></CoffeeCard>,
                        loader: ()=> fetch('../coffees.json')
                    }
                ]
            },
            {
                path: '/coffees',
                element:<Coffes></Coffes>,
                loader: ()=> fetch('../coffees.json')
            },
            {
                path: '/dashboard',
                element:<Dashborad></Dashborad>
            },
            {
                path:'/coffee/:id',
                element: <CoffeDetails></CoffeDetails>,
                loader: ()=> fetch('../coffees.json')
            }
        ]
    }
])
export default router;