import { useState,useEffect } from "react";
import "./ListaPokemones.css";


function ListaPokemones({pokemones, setPokemonActual, setInfoExtra, addLikes, info, setInfo, inputText, setInputText}){

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

    return(
      
        <div className="wrapper-input-lista">
          <input className="inputPokemon" placeholder="Pikachu" value={inputText} onChange={handleInputChange} type="text"/ >
        <div className="lista">
        {pokemones.map((pok, ind) => {
          if(pok.name.startsWith(inputText)){
            return (
          
              <div className="container-main-more" key={ind}>
                <button className="main-info"
                  onClick={() => {
                    addLikes(ind);
                  }}
                >
                  {" "}
                  <span className="name">{pok.name}</span>
                  <span className="likes">❤️ {pok.likes}</span>
                </button>
                <button
                  className="more-info"
                  onClick={() => {
                    if(info == false) setInfo(!info);
                    setPokemonActual({nombre:pok.name, index: ind});
                    setInfoExtra("")
                  }}
                >
                  i
                </button>
              </div>
            )
          }
        })}
        </div>

      </div>
    )
}

export default ListaPokemones;