import styled from "styled-components"
import { keyframes } from "styled-components"

export const parpadear = keyframes`
0%{
  opacity: 1;
}
50%{
  opacity: 0;
}

`

export const Container = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
`
export const Header = styled.header`
  @media (max-width:768px){
    flex-direction: column;
    gap: 2rem;
  }
  display: flex;
  justify-content: space-around;
  align-items:center;
  background-color: #FFF;
  padding: 12px;
  margin: 10px 0;
  border-radius: 10px;
  img{
    width: 150px;
  } 
`

export const Button = styled.button`
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: box-shadow .2s ease;
  padding: 5px;
  font-size: 16px;
  font-weight: 700;
  width: 100px;
  background-color: red;
  color: #fff;

  &:hover{
    box-shadow: 1px 2px 5px rgb(0,0,0,.9);
  }
`

export const FiltrosContainer = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  
  select {
    text-align:center;
    border-radius: 10px;  
    padding: 5px 8px;
    appearance: none;
  }
`

export const Card = styled.div`
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: box-shadow .5s ease;
    padding: 10px;
    :hover{
      box-shadow: 1px 1px 28px -2px rgba(0,0,0,0.69);
      -webkit-box-shadow: 1px 1px 28px -2px rgba(0,0,0,0.69);
      -moz-box-shadow: 1px 1px 28px -2px rgba(0,0,0,0.69);
    }
    @media (max-width:768px){
    width: 70%;
    margin: auto;
    }
`
export const CardInfo = styled.div`
  color: #FFF;
  -webkit-text-stroke: 1px black;
  align-items: left;
  width: 80%;
  margin:0 auto;
  p{
    display: inline-block;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.582);
    color: #fff;
  }
`

export const Img = styled.img`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  height: 50%;
  width: 90%;
`

export const Span = styled.span`
  display: flex;
  -webkit-text-stroke: 0px black;
  justify-content: center
  align-items: center;
  gap 2rem;
  p{
    font-weight: 700;
    color: #000;
  }
`
export const GridPokemon = styled.div`
    width: 95%;
    max-width: 1000px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 15px;

    @media (max-width:768px){
        grid-template-columns: repeat(1,1fr);
    }
`

export const PokedexContainer = styled.div`
  display: grid;
  background-color: #FFF;
  border-radius: 10px;
  padding-bottom: 10px;
  margin: 10px 0;
`

export const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  border-bottom-left-radius: 20px ;
  border-top-left-radius: 20px;
  transition: box-shadow .2s ease;
  &:hover{
    box-shadow: 1px 2px 5px rgb(0,0,0,.9);
  }
`

export const Filtros = styled.div`
  background-color: #FFF;
  padding: 1rem 0;
  border-radius: 10px;
`

//Info
//top 50% - (40%/2) = 50% - 20% = 30% 
//left 50% - (30%/2) = 50% - 15% = 35% 
export const ContenedorInfo = styled.div`
  position:absolute;
  width: 575px;
  height: 380px;
  top: 30%;
  left: 35%;
  background: linear-gradient(to top, #f7e26c 50% ,#f1d260 50%);
  background-size: 100% 10px;
`
export const HeaderInfo = styled.div`
  display: flex;
  align-items:center;
  font-size: 14px;
  color: #fff;
  justify-items: stretch;
  background-color:  #0177c6;
  .div1{
    width:82%;
    display:flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .div2{
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    display:flex;
    justify-content: start;
    align-items: center;
    width:60%;
  }
  .color{
    background-color:  #e8da9c;
    border-right: 3px solid aqua;
  }
  .color2{
    background-color:  #e8da9c;
    border-right: 3px solid aqua;
  }
  h3{
    margin:10px;
  }
  a{
    position: absolute;
    left: 450px;
    color: #fff;
    text-decoration: none;
  }
  .pokeInfo{
    position: absolute;
    left: 250px;
    padding: 10px 8px;
    border-radius: 5px;
    border: none;
  }
  .pokeStats{
    position: absolute;
    left: 300px;
    padding: 10px 8px;
    border-radius: 5px;
    border: none;
  }
`
export const ContenidoInfo = styled.div`
  border: 3px solid #8e8e8e;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  justify-items: stretch;
`

export const StatDiv = styled.div`
  display:flex;
  justify-content: space-between;
  margin: 0 10px;
  text-align:center;

  .bgIzquierda{
    background-color:  #788186;
    border-radius: 5px;
    p{
      color: #fff;
      
    }
  }
 .bgDerecha{
  background-color: rgba(255, 255, 255, 0.671);
  border-radius: 5px;
  width: 50px;
 }
 
`

export const InfoDiv = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 0 10px;
  text-align:center;
  
  .bgIzquierda{
    background-color:  #788186;
    border-radius: 5px;
    p{
      color: #fff;
      
    }
  }
  .bgDerecha{
    background-color: rgba(255, 255, 255, 0.671);
    border-radius: 5px;
   }
  .span{
    display: flex;
    justify-content: center;
    text-align: center;
    gap 2rem;
    p{
      margin: 0;
    }
   }
`

export const InfoImagen = styled.div`
  background-color:  #c9ade6;
  border-right: 3px solid #8e8e8e;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  h3{
    font-size: 14px;
  }
  img{
    background: linear-gradient(to top, #f3e7f5 50% ,#f8f6f9 50%);
    background-size: 100% 10px ;
    width: 250px;
    height: 180px;
    border: 3px solid #8e8e8e;
    margin-bottom: 5px;
  }

`

export const XpAbility =styled.div`
font-size: 14px;
 border: 3px solid #8e8e8e;
 border-top: none;
 display: grid;
 grid-template-rows: repeat(2,1fr);

`

export const ContenidoXA = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  justify-items: center;
  align-items: center;
  text-align:center;
  div{
    display: flex;
    gap: 3rem;
    justify-content: center;
    align-items: center;
  }
  .bg{
    p{
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      margin: auto;
      margin-top:-7px;
      -webkit-text-stroke: 1px black;
      
    }
    background-color:  #788186;
    border-radius: 5px;
    height: 10px;
    width: 150px;
  }
  .bgd{
    background-color: rgba(255, 255, 255, 0.671);
    border-radius: 5px;
    width: 120px;
    p{

    }
  }
`
//Loading

export const Loading = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
`

//Landing

export const LandingFondo = styled.div`
  position: relative;
  background-image: url(fondoLanding.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size:cover;
  background-attachment: fixed;
  height:100vh;
  .imgPokemon{
    position: absolute;
    left: 35%;
    img{
      width: 35vw;
    }
  }
  .start{
    animation-name: ${parpadear};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    color: #fff;
    font-size: 50px;
    font-weight: 900;
    position: absolute;
    -webkit-text-stroke: 4px black;
    left: 45%;
    top: 60%;
    text-decoration: none;
  }
  @media (max-width:768px){
    .start{
      position: absolute;
      left: 30%;
      top: 60%;
    }
  }
`