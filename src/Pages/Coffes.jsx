import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card';
import sortBy from 'sort-by';

const Coffes = () => {
    const data = useLoaderData()

    const [coffees,setCoffees] = useState(data)
    const handleSort = (sortBy) => {
        if(sortBy == 'popularity'){
            //sort by popularity
            const sorted = [...data].sort((a,b)=> b.popularity - a.popularity)
            setCoffees(sorted)

        }
        else if(sortBy === 'rating'){
            //sort by rating
            const sorted = [...data].sort((a,b)=> b.rating - a.rating)
            setCoffees(sorted)


        }
    }
    return (
        <div>
            <div className='flex justify-between items-center mx-7 my-9'>
                <div><h1 className='text-3xl font-thin'>Sort Coffee &apos;s by Popularity & Rating &gt;</h1></div>
                <div>
                    <button onClick={()=> handleSort('popularity')} className='btn btn-warning mr-4'>Sort By Popularity</button>
                    <button onClick={()=> handleSort('rating')} className='btn btn-warning'>Sort By Rating</button>
                </div>
            </div>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 mx-5'>
            {
                coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
        </div>
    );
};

export default Coffes;