import { useEffect, useState } from "react";
import ModalPokemon from "./ModalPokemon";
import "./Ul.css";
import ModalInfoExtra from "./ModalInfoExtra";
import ListaPokemones from "./ListaPokemones";

function Ul({pokemones,setPokemones}) {
  
  const [info, setInfo] = useState(false);
  const [pokemonActual, setPokemonActual] = useState(null);
  const [infoExtra,setInfoExtra] = useState(false);
  const [inputText,setInputText] = useState("");


  function addLikes(index) {
    setPokemones(
      pokemones.map((pok, i) => {
        if (i == index) {
          return { ...pok, likes: pok.likes + 1 };
        } else {
          return pok;
        }
      })
    );
  }

  return (
    <>
      {pokemones != [] ? <ListaPokemones pokemones={pokemones} setPokemonActual={setPokemonActual} setInfoExtra={setInfoExtra} addLikes={addLikes} info={info} setInfo={setInfo} inputText={inputText} setInputText={setInputText}/> : ""}
      {info && <ModalPokemon n={pokemonActual} infoExtra ={infoExtra} setInfoExtra={setInfoExtra} addLikes={addLikes} className="poke-info"/>}
      {infoExtra != "" && <ModalInfoExtra infoExtra ={infoExtra} setInfoExtra={setInfoExtra} className="extra-info"/>}
    </>
  );
}

export default Ul;
