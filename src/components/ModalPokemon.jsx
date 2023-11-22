import { useState, useEffect } from "react";
import "./ModalPokemon.css"
function ModalPokemon({n}){

    const [pokemon,setPokemon] = useState(null);

    useEffect(() => {
        console.log("renderizado");
        async function fetchData() {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${n}`
          );
          const data = await res.json();
          return data;
        }
    
        async function ejecutar() {
          const dataResults = await fetchData();
          setPokemon(dataResults);
        }
        ejecutar();
      }, []);
    
    if(pokemon == null) return <></>
    return(
        <div className="pokemon-card">  
            <img src={pokemon.sprites.front_default} alt="" className="div1"/>
            <p className="div2">Nombre: {n}</p>
            <div className="div3">
                <p>Tipo/s</p>
                <ul >
                        {pokemon.types.map((tipo,indice)=>(
                        <li key={indice}>{tipo.type.name}</li>
                    ))}
                </ul>
            </div>
            <div className="div4">
                <p>Habilidad/es</p>
                <ul>
                    {pokemon.abilities.map((abilidad,indice)=>(
                        <li key={indice}>{abilidad.ability.name}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}

export default ModalPokemon;