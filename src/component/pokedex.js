import Pokemon from "./pokemon"
import { GridPokemon,Loading } from "./styled"

const Pokedex = ({pokemon}) =>{

    

    if(!pokemon.length && Array.isArray(pokemon)) {
        return(
            <Loading>
                <div className="wrapper">
                <div className="pokeball">
                </div>
                </div>       
            </Loading>
        )
    }
    return(
       <GridPokemon>
            {Array.isArray(pokemon) ? pokemon.map(pokemon=><Pokemon key={pokemon.name} pokemon={pokemon}/>):<Pokemon key={pokemon.name} pokemon={pokemon}/>}
        </GridPokemon>
       
    )
}

export default Pokedex