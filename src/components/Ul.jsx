import { useEffect, useState } from "react";
import ModalPokemon from "./ModalPokemon";
import "./Ul.css";
import ModalInfoExtra from "./ModalInfoExtra";
import ListaPokemones from "./ListaPokemones";

function Ul() {
  const [pokemones, setPokemones] = useState([]);
  const [info, setInfo] = useState(false);
  const [pokemonActual, setPokemonActual] = useState("");
  const [infoExtra,setInfoExtra] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      const data = await res.json();
      return data.results;
    }

    async function ejecutar() {
      const dataResults = await fetchData();
      for (let d of dataResults) {
        d.likes = 0;
      }
      setPokemones(dataResults);
    }
    ejecutar();
  }, []);

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
      {pokemones != [] ? <ListaPokemones pokemones={pokemones} setPokemonActual={setPokemonActual} setInfoExtra={setInfoExtra} addLikes={addLikes} info={info} setInfo={setInfo}/> : ""}
      {info && <ModalPokemon n={pokemonActual} infoExtra ={infoExtra} setInfoExtra={setInfoExtra} className="poke-info"/>}
      {infoExtra != "" && <ModalInfoExtra infoExtra ={infoExtra} setInfoExtra={setInfoExtra} className="extra-info"/>}
    </>
  );
}

export default Ul;
