import { useEffect, useState } from "react";
import { useDispatch, } from "react-redux";
import  { filtroPoke} from "../reducer/action";
import { Button, Input,SearhDiv} from "./styled"; 

const SearchBar = ({setCurrentPage}) =>{
    const [filter,setFilter] = useState({search:''})
    const dispatch = useDispatch()
    const handleSearch = () =>{
        dispatch(filtroPoke(filter))
        setCurrentPage(1)
    }

    const onChange = (value) =>{
        setFilter({
            ...filter,
            search: value.target.value
        })
    }
    useEffect(()=>{
        dispatch(filtroPoke(filter))
    },[dispatch])

    return(
        <SearhDiv>
            <Input onChange={onChange} />
            <Button onClick={handleSearch}>Buscar</Button>
        </SearhDiv>
    )
}

export default SearchBar