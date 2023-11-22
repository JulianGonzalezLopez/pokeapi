import { useEffect, useState } from "react";
import ModalPokemon from "./ModalPokemon";
import "./Ul.css";

function Ul() {
  const [pokemones, setPokemones] = useState([]);
  const [info, setInfo] = useState(false);
  const [pokemonActual, setPokemonActual] = useState("");
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
    console.log(pokemones);
  }

  return (
    <div className="container-lista">
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
                setInfo(!info);
                setPokemonActual(pok.name);
              }}
            >
              i
            </button>
          </div>
        ))}
      </div>
      {info && <ModalPokemon n={pokemonActual}/>}
    </div>
  );
}

export default Ul;
