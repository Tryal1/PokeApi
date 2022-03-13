import {Card, Span,Img,CardInfo } from "./styled"
import '../App.css'
import { Link } from "react-router-dom"

const Pokemon = ({pokemon}) =>{
    return(
        <Link to={`/${pokemon.id}`} style={{textDecoration: 'none'}}>
        <Card className={`${pokemon.types[0].type.name}`}>
            {pokemon.sprites.front_default ? <Img src={pokemon.sprites.front_default}/>:  <Img src="/NoEncontrado.png" alt="No Encontrado"/> }
            <CardInfo>
                <p>#{pokemon.id.toString().padStart(3,0)}</p>
                {pokemon.name.length <10 ?<h2>{pokemon.name.toUpperCase().replace("-"," ")}</h2>:<h2>{pokemon.name.substring(0,9).toUpperCase().replace("-"," ")}...</h2> }
                <Span>{pokemon.types.map(e=><p style={{border: 'none'}} className={e.type.name} key={e.type.name} >{e.type.name.toUpperCase()}</p>)}</Span>
            </CardInfo>
        </Card>
        </Link> 
    )
}

export default Pokemon