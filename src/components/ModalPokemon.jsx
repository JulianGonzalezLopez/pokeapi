import { useState, useEffect } from "react";
import "./ModalPokemon.css"
function ModalPokemon({n,infoExtra,setInfoExtra}){

    const [pokemon,setPokemon] = useState(null);

    useEffect(() => {
        
        async function fetchData() {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${n}`
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
            <img src={pokemon.sprites.front_default} alt="" className="div1"/>
            <p className="div2">Nombre: {n}</p>
            <div className="div3">
                <p>Tipo/s</p>
                <div>
                        
                        {pokemon.types.map((tipo,indice)=>(
                        <button key={indice} onClick={()=>{setInfoExtra(`https://pokeapi.co/api/v2/type/${tipo.type.name}`)}}>{tipo.type.name}</button>
                    ))}
                </div>
            </div>
            <div className="div4">
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