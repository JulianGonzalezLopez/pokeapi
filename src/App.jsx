import './App.css'
import "./index.css"
import Ul from './components/Ul.jsx';
import { useEffect,useState } from 'react';
 function App() {
  const [pokemones, setPokemones] = useState([]);
  let allPokemones;

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
      allPokemones = dataResults;
      setPokemones(dataResults);
    }
    ejecutar();
  }, []);



  return(
    <>
      <header>
        <h1>I choose you</h1>
      </header>
      <main>
        <Ul pokemones={pokemones} setPokemones={setPokemones}></Ul>
      </main>
      <footer>
        <p>creado por tuvi</p>
      </footer>
      
    </>
  )
    /*
    SUGERENCIA: 
    1. CUADRO DE BUSQUEDA PARA MOBILE Y PC (EN MOBILE SOLO SE VE EL CUADRO) Y QUE VAYA MOSTRANDO INFO DINAMICAMENTE
    !!AUTOCOMPLETADO!!
    2. USAR BOOTSTRAP
    3. AGREGAR STATS POKEMON
    */

}


export default App