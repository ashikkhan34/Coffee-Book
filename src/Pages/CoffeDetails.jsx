import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addFavorite, getAllFavorites } from '../Utils';

const CoffeDetails = () => {
    const { id } = useParams();
    //all coffee data receive
    const allCoffeeData = useLoaderData();

    const [coffee, setCoffee] = useState({})

    //clickable button hidden
    const [isFavorite,setIsFavorite] = useState(false)

    useEffect(() => {
        const singleData = allCoffeeData.find(coffee => coffee.id == id)
        setCoffee(singleData)
        //get all data 
        const favorite = getAllFavorites()
        const isExit = favorite.find(item=> item.id == singleData.id)
        if(isExit){
            setIsFavorite(true)
        }
        

    }, [])


    //handle favorite btn click
    const handleFavorite = (coffee)=>{
        addFavorite(coffee)
        setIsFavorite(true)
    }
    return (
        <div>
            <h1 className='text-2xl font-thine px-4 lg:px-32'>Making Process :<br />{coffee.making_process}</h1>
            <img className='w-2/3 mx-auto mt-5' src={coffee.image} alt="" />
            <div className='flex justify-between p-5 lg:px-56 py-5'>
                <div>
                    <p>Popularity : {coffee.popularity}</p>
                    <p>Rating : {coffee.rating}</p>

                </div>
                <div>
                    <button disabled={isFavorite} onClick={()=> handleFavorite(coffee)} className='btn btn-warning'>Add Favorite</button>
                </div>

            </div>

        </div>
    );
};

export default CoffeDetails;