import { Link } from "react-router-dom"
import { LandingFondo } from "./styled"

const Landing = () =>{
    return(
        <LandingFondo>
            <div className="imgPokemon"><img src="landing.png"/></div>
            <Link className="start" to={'/pokemon'}>PRESS START</Link>
        </LandingFondo>
    )
}

export default Landing