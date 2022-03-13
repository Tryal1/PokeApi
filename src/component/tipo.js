import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {filtroPoke, } from "../reducer/action"
import { FiltrosContainer } from "./styled"

const Tipo = ({setRender})=>{
    const tipos = useSelector(e=>e.type)
    const dispatch = useDispatch()
    const [filter,setFilter] = useState({type:'all',order:'all',stat:'all'})
    const handleType = (e) =>{
        setFilter({
            ...filter,
            type: e,
        })
    }
    const handleOrder = (e) =>{
        setFilter({
            ...filter,
            order: e,
        })
    }
    const handleStat = (e) =>{
        setFilter({
            ...filter,
            stat: e,
        })
    }


    useEffect(()=>{
        dispatch(filtroPoke(filter))
        setRender(filter)
    },[dispatch,filter])

    return(
         <FiltrosContainer>
            <select onClick={(e)=>handleType(e.target.value)}>
                <option value='all'>ALL type</option>
                {tipos ? tipos.map(tipo =><option key={tipo.name} value={tipo.name}>{tipo.name.toUpperCase()}</option>):null}
            </select>
            <select onClick={(e)=>handleOrder(e.target.value)}>
                <option value='all'>None</option>
                <option value='asc'>A-Z</option>
                <option value='des'>Z-A</option>
            </select>
            <select onClick={(e)=>handleStat(e.target.value)}>
                <option value='all'>None</option>
                <option value='ps'>PS</option>
                <option value='attack'>Attack</option>
                <option value='defending'>Defending</option>
                <option value='special-attack'>Special attack</option>
                <option value='special-defense'>Special Defense</option>
                <option value='speed'>Speed</option>
                
            </select>
        </FiltrosContainer>
        
    )
}

export default Tipo