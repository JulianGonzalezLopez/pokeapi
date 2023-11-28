import { useState,useEffect } from "react";
import "./ListaPokemones.css";


function ListaPokemones({pokemones, setPokemonActual, setInfoExtra, addLikes, info, setInfo}){

    return(
        <div className="lista">
        {pokemones.map((pok, index) => (
          <div className="container-main-more" key={index}>
            <button className="main-info"
              onClick={() => {
                addLikes(index);
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