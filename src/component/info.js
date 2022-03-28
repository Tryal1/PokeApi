import { useRef, useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getDataPokemon } from "../reducer/action"
import { DivGeneral,StatDiv,XpAbility,ContenidoXA,ContenedorInfo,HeaderInfo,ContenidoInfo,InfoDiv,InfoImagen} from "./styled"

const Info =  () =>{
    const color1 = useRef();
    const color2 = useRef();
    const dispatch = useDispatch()
    const url = window.location.href
    const id = url.split('/').filter(x=>x).pop()
    const pokemon = useSelector(e=>e.detail)
    const [page,setPage] = useState(1)

    useEffect(()=>{
        dispatch(getDataPokemon(id))
    },[dispatch,id])
    
    const pokeInfo = () =>{
        setPage(1)
        
        if(!color1.current.classList.contains('color')){
            color1.current.classList.add('color')
            color2.current.classList.remove('color2')
        }
        
    }
    const pokeStats = () =>{
        setPage(2)
        if(color2){
            color1.current.classList.remove('color')
            color2.current.classList.add('color2')
        }
    }
    
   if(pokemon.id !== Number(id)){
       return(
           <div>
               loading...
           </div>
       )
   }

    return(
        <DivGeneral>
        <ContenedorInfo>
            <HeaderInfo>
                <div ref={color2} className="div2">
                    <div ref={color1} className="div1 color"> 
                        {page === 1? <h3>Details</h3>:<h3>Stats</h3>}
                        <button className="pokeInfo" onClick={pokeInfo}></button>
                        <button className="pokeStats" onClick={pokeStats}></button>
                        <Link to={'/pokemon'}>Back</Link>      
                    </div>
                </div>                          
            </HeaderInfo>
            <ContenidoInfo>
                <InfoImagen>
                    <h3>{pokemon.name?.toUpperCase().replaceAll("-"," ")}</h3>
                    <img src={pokemon?.sprites?.front_default}/>
                </InfoImagen>
                {page === 1 ?
                <InfoDiv>
                     <div>
                        <div className="bgIzquierda"><p>N°</p></div>
                        <div className="bgIzquierda"><p>Name</p></div>
                        <div className="bgIzquierda"><p>Type</p></div>
                        <div className="bgIzquierda"><p>Weight</p></div>
                        <div className="bgIzquierda"><p>Height</p></div>
                    </div>
                    <div>
                        <div className="bgDerecha"><p>{pokemon.id}</p></div>
                        <div className="bgDerecha"><p>{pokemon.name?.toUpperCase().replaceAll("-"," ")}</p></div>
                        <div className="bgDerecha span"> {pokemon.types?.map(e=><p style={{border: 'none'}} className={e.type.name} key={e.type.name} >{e.type.name?.toUpperCase()}</p>)}</div>
                        <div className="bgDerecha"><p>{pokemon.weight}</p></div>
                        <div className="bgDerecha"><p>{pokemon.height}</p></div>
                    </div>
                </InfoDiv>:
                <StatDiv>
                    <div>
                        <div className="bgIzquierda"><p>HP</p></div>
                        <div className="bgIzquierda"><p>ATTACK</p></div>
                        <div className="bgIzquierda"><p>DEFENSE</p></div>
                        <div className="bgIzquierda"><p>SP.ATK</p></div>
                        <div className="bgIzquierda"><p>SP.DEF</p></div>
                        <div className="bgIzquierda"><p>SPEED</p></div>
                    </div>
                    <div>
                        {pokemon.stats?.map((poke)=><div className="bgDerecha"><p>{poke.base_stat}</p></div>)}    
                    </div> 
                 </StatDiv>}
             
            </ContenidoInfo>
            <XpAbility>
                <ContenidoXA>
                    <div className="bg">
                    <p>ABILITY</p>
                    </div>
                    <div>
                        {pokemon.abilities?.map((e)=><p className="bgd">{e.ability.name?.toUpperCase().replaceAll("-"," ")}</p>)}
                    </div>
                </ContenidoXA>
                <ContenidoXA>
                    <div className="bg"><p>EXPERIENCIA BASE</p></div>
                    <div ><p className="bgd">{pokemon.base_experience}</p></div>
                </ContenidoXA>
            </XpAbility>
        </ContenedorInfo>
        </DivGeneral>
    )
}
//<p><Span>{pokemon.abilities.map(e=><P key={e.ability.name}>{e.ability.name.replace("-"," ")}</P>)}</Span></p>

export default Info