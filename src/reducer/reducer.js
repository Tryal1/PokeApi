
const intialState = {
    allPokemon: [],
    pokemon: [],
    type: [],
    generation: [],
    detail: [],
    info:[],
}

const Reducer = (state = intialState, {type, payload}) =>{
    switch(type){
        case "GET_POKEMON":
            return{
                ...state,
                pokemon: payload,
                allPokemon: payload,
            }
        case "GET_TYPE":
            return{
                ...state,
                type: payload,
            }
        case "GET_GENERATION":
            return{
                ...state,
                generation: payload,
            }
        case "GET_DITAILS":
            const {id,name,abilities,weight,base_experience,sprites,types,height,stats} = payload
            return{
                ...state,
                detail: {id,name,abilities,weight,base_experience,sprites,types,height,stats},
            }
        case"GET_FILTER":
            const {type,order,stat,search} = payload
            const pokemon = state.allPokemon
            let filter = pokemon
            //Filter Type
            if(type === 'all'){
                filter = pokemon
            }else if(type !== 'all'){
                filter = pokemon?.filter(pokemon=>{
                    if(pokemon.types[0]?.type?.name===type||pokemon.types[1]?.type?.name===type){
                        return true
                    }return false
                })
            }
            //Filter Search
            if(isNaN(search) && search !== undefined){
                filter  =  pokemon?.filter(pokemon=>{if(pokemon?.name?.indexOf(search)>-1){
                    return true
                }return false})
            }else if(!isNaN(search) && search !==''){
                filter  =  pokemon?.filter(pokemon=>{if(pokemon?.id === Number(search)){
                    return true
                }return false})
            }else if(search === ''){
                filter = pokemon
            }

            //Filter Order
            if(order==="asc" ) {  filter =  filter.sort((a,b)=>{
                if(a.name.toLowerCase()>b.name.toLowerCase()){
                   return 1
                }
                if(b.name.toLowerCase()>a.name.toLowerCase()){
                   return -1
                }
                return 0
            })} 
            else if(order==="des"){  filter = filter.sort((a,b)=>{
               if(a.name.toLowerCase()>b.name.toLowerCase()){
                  return -1
               }
               if(b.name.toLowerCase()>a.name.toLowerCase()){
                  return 1
               }
               return 0
            })}
            else if(order === 'all'){ filter = filter.sort((a,b)=>{
               if(a.id>b.id){
                  return 1
               }
               if(b.id>a.id){
                  return -1
               }
               return 0
            })
            }
            
            //Filter Stat
            if(stat==="ps"){ filter.sort((a, b) => {
                if(a.stats[0].base_stat>b.stats[0].base_stat){
                    return -1
                 }
                 if(b.stats[0].base_stat>a.stats[0].base_stat){
                    return 1
                 }
                 return 0
               
            })}
            else if(stat==="attack"){ filter.sort((a, b) => {
                if(a.stats[1].base_stat>b.stats[1].base_stat){
                    return -1
                 }
                 if(b.stats[1].base_stat>a.stats[1].base_stat){
                    return 1
                 }
                 return 0
               
            })}
            else if(stat==="defending"){ filter.sort((a, b) => {
                if(a.stats[2].base_stat>b.stats[2].base_stat){
                    return -1
                 }
                 if(b.stats[2].base_stat>a.stats[2].base_stat){
                    return 1
                 }
                 return 0
               
            })}
            else if(stat==="special-attack"){ filter.sort((a, b) => {
                if(a.stats[3].base_stat>b.stats[3].base_stat){
                    return -1
                 }
                 if(b.stats[3].base_stat>a.stats[3].base_stat){
                    return 1
                 }
                 return 0
               
            })}
            else if(stat==="special-defense"){ filter.sort((a, b) => {
                if(a.stats[4].base_stat>b.stats[4].base_stat){
                    return -1
                 }
                 if(b.stats[4].base_stat>a.stats[4].base_stat){
                    return 1
                 }
                 return 0
               
            })}
            else if(stat==="speed"){ filter.sort((a, b) => {
                if(a.stats[5].base_stat>b.stats[5].base_stat){
                    return -1
                 }
                 if(b.stats[5].base_stat>a.stats[5].base_stat){
                    return 1
                 }
                 return 0
            })}
        return {
            ...state,
            pokemon: filter,
            
        }
        default: 
            return{
                ...state
            }
    }
}

export default Reducer