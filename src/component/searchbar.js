import { useEffect, useState } from "react";
import { useDispatch, } from "react-redux";
import  { filtroPoke} from "../reducer/action";
import { Button, Input } from "./styled"; 

const SearchBar = () =>{
    const [filter,setFilter] = useState({search:''})
    const dispatch = useDispatch()
    const handleSearch = () =>{
        dispatch(filtroPoke(filter))
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
        <div>
            <Input onChange={onChange} />
            <Button onClick={handleSearch}>Buscar</Button>
        </div>
    )
}

export default SearchBar