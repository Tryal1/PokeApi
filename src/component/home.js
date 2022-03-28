import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import GetPokemonList, {getTypes } from "../reducer/action";
import Pokedex from "./pokedex";
import SearchBar from "./searchbar";
import { Container, Filtros, Header, PokedexContainer } from "./styled";
import Tipo from "./tipo";

function All() {
  const dispatch = useDispatch()
  const pokemon = useSelector(e=>e.pokemon)
  const [CurrentPage, setCurrentPage] = useState(1)
  const [NumberOfPokemon, setNumbreOfPokemon] = useState(20)
  const indexOfLastPoke = CurrentPage * NumberOfPokemon
  const indexOfFirstPoke = indexOfLastPoke - NumberOfPokemon
  let currentPokemon =[]
  if(Array.isArray(pokemon)){
    currentPokemon =  pokemon.slice(indexOfFirstPoke,indexOfLastPoke)
  }else{
    currentPokemon = pokemon
  }
  const totalPage = Math.ceil(pokemon.length/NumberOfPokemon)
  const [render, setRender] = useState(1)


  const renderizar = () =>{
    setRender(render*-1)
  }

  const pages=(pageNumber)=>{
    setCurrentPage(pageNumber)
  }

  const handlePageClick = (e) => {
    pages(e.selected+1)
  }
  useEffect(()=>{
    dispatch(GetPokemonList());
  },[dispatch])

  useEffect(()=>{
    dispatch(getTypes())
  },[dispatch])

  return (
    <div>
      <Container>
        <Header>
          <img src="/pokeApi.png"/>
          <SearchBar setCurrentPage={setCurrentPage}/>
        </Header>
        <Filtros>
          <Tipo setRender={renderizar}/>
        </Filtros>
        <PokedexContainer>
          <ReactPaginate
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={totalPage}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}/>
          
          <Pokedex pokemon={currentPokemon}/>
        </PokedexContainer>
      </Container>
    </div>
  );
}

export default All