import { useState,useEffect } from "react";



function ListaPokemones({pokemones, setPokemonActual, setInfoExtra, addLikes, info, setInfo}){

    return(
        <div className="lista">
        {pokemones.map((pok, index) => (
          <div key={index}>
            <button
              onClick={() => {
                addLikes(index);
              }}
            >
              {" "}
              <span>{pok.name}</span> ❤️ {pok.likes}
            </button>
            <button
              className="more-info"
              onClick={() => {
                if(info == false) setInfo(!info);
                setPokemonActual(pok.name);
                setInfoExtra("")
              }}
            >
              i
            </button>
          </div>
        ))}
      </div>
    )
}

export default ListaPokemones;