import React,{useEffect} from 'react'
import axios from 'axios';
import "../Style.css"
function Main() {

    useEffect(() => {
     async function fetchData(){
        const {data} = await axios.get("https://corona.lmao.ninja/v2/countries/Bangladesh");
        console.log(data)
     }
     fetchData();
    }, [])

  return (
    <div className="bg">
      <h1>T</h1>
    </div>
    )
}

export default Main
