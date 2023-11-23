import { useEffect,useState } from "react";


function ModalInfoExtra({infoExtra}){

    const [relatedData, setRelatedDat] = useState(null);

    useEffect(() => {
        console.log(infoExtra);

        async function fetchData() {
          const res = await fetch(
            infoExtra
          );
          const data = await res.json();
          return data;
        }
    
        async function ejecutar() {
          const dataResults = await fetchData();
          setRelatedDat(dataResults);
          }
        
        ejecutar();
      }, [infoExtra]);

    if(relatedData != null){
        if(relatedData.hasOwnProperty("damage_relations")){
            return (
            <>
                <div className="extra-info">
                    <h4>{relatedData.name}</h4>
                    <p>No hace daño:</p>
                    <ul>
                        {console.log(relatedData.damage_relations)}
                        {relatedData.damage_relations.no_damage_to.map((elm)=>(
                            <li>{elm.name}</li>
                        ))}
                    </ul>
                    <p>Hace 50% del daño:</p>
                    <ul>
                        {relatedData.damage_relations.half_damage_to.map((elm)=>(
                            <li>{elm.name}</li>
                        ))}
                    </ul>
                    <p>Hace daño doble:</p>
                    <ul>
                        {relatedData.damage_relations.double_damage_to.map((elm)=>(
                            <li>{elm.name}</li>
                        ))}
                    </ul>
                    <p>No toma daño:</p>
                    <ul>

                        {relatedData.damage_relations.no_damage_from.map((elm)=>(
                            <li>{elm.name}</li>
                        ))}
                    </ul>
                    <p>Toma el 50% del daño:</p>
                    <ul>
                    
                        {relatedData.damage_relations.half_damage_from.map((elm)=>(
                            <li>{elm.name}</li>
                        ))}
                    </ul>
                    <p>Toma daño doble:</p>
                    <ul>
                        {relatedData.damage_relations.double_damage_from.map((elm)=>(
                            <li>{elm.name}</li>
                        ))}
                    </ul>
                </div>
            </>
            )
        }
        else{
            return(
                <div className="extra-info">
                    <h4>{relatedData.name}</h4>
                    <p>{relatedData.effect_entries[1].effect}</p>
                </div>
            )
        }
    }

}

export default ModalInfoExtra;