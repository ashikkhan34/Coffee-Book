import React, { useEffect, useState } from 'react';
import Heading from '../Components/Heading';
import { getAllFavorites, removeFavorite } from '../Utils';
import Card from '../Components/Card';

const Dashborad = () => {

    const [coffees ,setCoffees] = useState([])
        useEffect(()=>{
            const favorite = getAllFavorites()
            setCoffees(favorite)
        },[])

        //remove btn to local dashboard and local storage
        const handleRemove = (id) =>{
            removeFavorite(id)
            // remove to dashboard ui 
            const favorite = getAllFavorites()
            setCoffees(favorite)
        }
    
    return (
        <>
        <Heading title={'Welcome to Dashboard'} subTitle={'Manage coffees that you have previously added as favorite . You can view or remove that from here'}></Heading>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 mx-5'>
            {
                coffees.map(coffee => <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
        </>
    );
};

export default Dashborad;