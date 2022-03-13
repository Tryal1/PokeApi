import axios from "axios";
export const GetPokemonList = () => async dispatch => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1126`)
    const promises = res.data.results.map(async (pokemon) =>{return await dataPokemon(pokemon.url);})
    const data = await Promise.all(promises)
    dispatch({
        type: "GET_POKEMON",
        payload: data
    })
};

export const getDataPokemon =   (id) =>{
    return async (dispatch) =>{
        const  detail = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return(dispatch({
            type: "GET_DITAILS",
            payload: detail.data
        }))
    }
}

export const dataPokemon = async (url) =>{
    const respone = await axios.get(url);
    return respone.data
}

export const getTypes = () =>{
    return async (dispatch) =>{
        const tipos = await axios.get(`https://pokeapi.co/api/v2/type`)
        return dispatch ({
            type: "GET_TYPE",
            payload: tipos.data.results
        })
    }
}

export function filtroPoke(payload){
    return {
        type:"GET_FILTER",
        payload:payload
    }
}
export default GetPokemonList