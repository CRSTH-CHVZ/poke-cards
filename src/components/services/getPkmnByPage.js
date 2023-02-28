import axios from "axios";

export const getPkmPage = async ( pkId ) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20%22`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}