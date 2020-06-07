import React, {useState,useEffect} from 'react'
import axios from 'axios';
function SinglePirate(props) {
    const [pirate, setPirate] = useState(null);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/pirates/' + props.id)
        .then(response => setPirate(response.data))
    }, [props.id])

    if(pirate === null) return "Loading...."
    return (
        <div>
           <h2>{pirate.name}</h2>
           <h1>"{pirate.phrase}"</h1>
           <p>#treasure chest:{pirate.chest}</p>
           <p>{pirate.leg ? "no" : "yes"}</p>
           <p>{pirate.hook ? "no" : "yes"}</p>
           <p>{pirate.patch ? "no" : "yes"}</p>
        </div>
    )
}

export default SinglePirate
