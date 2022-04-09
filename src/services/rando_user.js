import axios from 'axios';

export const fetchUser = async () => {
    try{
        const response =  await axios('https://api.randomuser.me/')
        console.log("loading", response)
        return response
}   catch (error) {
    console.error(error)
}
}


