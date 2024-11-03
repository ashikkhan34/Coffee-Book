import toast from "react-hot-toast";

//get all coffee form local storage
const getAllFavorites = () => {
    const allData = localStorage.getItem('favorites')

    if (allData) {
        const favorites = JSON.parse(allData)
        console.log(favorites)
        return favorites;
    }
    else {
        console.log([])
        return []
    }
}



//add a coffee to local storage
const addFavorite = coffee => {
    //get all previous saved coffee data
    const favorites = getAllFavorites()
    const isExit = favorites.find(item => item.id == coffee.id)
    if (isExit) return toast.error('Coffee already exit!');
    console.log(favorites)
    favorites.push(coffee)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success('Successfully created!');
}




//remove a coffee from local storage
const removeFavorite = id => {
    const favorites = getAllFavorites()
    const remaining = favorites.filter(coffee => coffee.id != id)
    localStorage.setItem('favorites', JSON.stringify(remaining))
    toast.success('Successfully Removed');
}


export { addFavorite, removeFavorite,getAllFavorites }