import { useState, useEffect } from "react";
import "./ModalPokemon.css"



function ModalPokemon({n,infoExtra,setInfoExtra, addLikes}){

    const [pokemon,setPokemon] = useState(null);
    const [shiny, setShiny] = useState(false);
    

    useEffect(() => {
        
        async function fetchData() {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${n.nombre}`
          );
          const data = await res.json();
          return data;
        }
    
        async function ejecutar() {
          const dataResults = await fetchData();
          if(pokemon != null){
            console.log(pokemon.name + " " + dataResults.name);
            if(pokemon.name != dataResults.name)
            setPokemon(dataResults); 
          }
          else{
            setPokemon(dataResults);
          }
            
        }
        
        ejecutar();
        
      }, [n]);
    


    if(pokemon == null) return <></>
    return(
        <div className="pokemon-card">
            <div className="wrapper-img-button">
            <img onMouseEnter={()=>{setShiny(!shiny)}} onMouseLeave={()=>{setShiny(!shiny )}} src={shiny == false ? pokemon.sprites.front_default : pokemon.sprites.front_shiny} alt="" className="imagen-pokemon"/>
            <button onClick={()=>{addLikes(n.index)}}>❤️</button>
            <p className="nombre-pokemon">Nombre: {n.nombre}</p>
            </div>
            <div className="tipos-pokemon">
                <p>Tipo/s</p>
                <div>     
                        {pokemon.types.map((tipo,indice)=>(
                        <button key={indice} onClick={()=>{setInfoExtra(`https://pokeapi.co/api/v2/type/${tipo.type.name}`)}}>{tipo.type.name}</button>
                    ))}
                </div>
            </div>
            <div className="habilidades-pokemon">
                <p>Habilidad/es</p>
                <div>
                    {console.log(infoExtra)}
                    {pokemon.abilities.map((abilidad,indice)=>(
                        <button key={indice} onClick={()=>{setInfoExtra(`https://pokeapi.co/api/v2/ability/${abilidad.ability.name}`)}}>{abilidad.ability.name}</button>
                    ))}
                </div>
            </div>
            
        </div>
    )
}



export default ModalPokemon;