import { useEffect,useState } from "react";
import "./ModalInfoExtra.css";  

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
                    <h4 className="div1">{relatedData.name}</h4>
                    {(relatedData.damage_relations.no_damage_to.length >= 1) &&                    
                    <div className="div2">
                        
                        <p>No hace daño:</p>
                        <ul>
                            {relatedData.damage_relations.no_damage_to.map((elm)=>(
                                <li>{elm.name}</li>
                            ))}
                        </ul>
                        </div>
                    }
                    {relatedData.damage_relations.half_damage_to >= 1 &&
                        <div className="div4">    
                        <p>Hace 50% del daño:</p>
                        <ul>
                        {relatedData.damage_relations.half_damage_to.map((elm)=>(
                            <li>{elm.name}</li>
                        ))}
                        </ul>
                        </div>
                        }
                    {relatedData.damage_relations.double_damage_to >= 1 &&
                    <div className="div6">
                        <p>Hace daño doble:</p>
                        <ul>
                            {relatedData.damage_relations.double_damage_to.map((elm)=>(
                                <li>{elm.name}</li>
                            ))}
                        </ul>
                        </div>
                    }
                    {relatedData.damage_relations.no_damage_from >= 1 &&
                    <div className="div3">
                        <p>No toma daño:</p>
                        <ul>
                            {relatedData.damage_relations.no_damage_from.map((elm)=>(
                                <li>{elm.name}</li>
                            ))}
                        </ul>
                        </div>
                    }
                    {relatedData.damage_relations.half_damage_from.length >= 1 &&
                    <div className="div5">
                        <p>Toma el 50% del daño:</p>
                        <ul>
                        
                            {relatedData.damage_relations.half_damage_from.map((elm)=>(
                                <li>{elm.name}</li>
                            ))}
                        </ul>
                        </div>
                    }
                    {relatedData.damage_relations.double_damage_from.length >= 1 &&
                        <div className="div7">
                        <p>Toma daño doble:</p>
                        <ul>
                            {relatedData.damage_relations.double_damage_from.map((elm)=>(
                                <li>{elm.name}</li>
                            ))}
                        </ul>
                        </div>
                        }                    
                </div>
            </>
            )
        }
        else{
            return(
                <div className="extra-info">
                    <div className="divTot">
                        <h4>{relatedData.name}</h4>
                        <p>{relatedData.effect_entries[1].effect}</p>
                    </div>
                    
                </div>
            )
        }
    }

}

export default ModalInfoExtra;