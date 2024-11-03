import React from 'react';
import Banner from '../Components/Banner';
import Heading from '../Components/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Components/Categories';

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>

            <Banner></Banner>
            <Heading
                title='Browse by Coffee by Category'
                subTitle='Choose your desired coffee category to browse through specific coffees that fit in your taste'></Heading>
            {/* category tab section */}
            <Categories categories={categories}></Categories>

            {/* dynamic nested components */}
            <Outlet></Outlet>

            
        </div>
    );
};

export default Home;