import axios from "axios";

export const getPkmInfo = async ( pkId ) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ pkId }/`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}