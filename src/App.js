import Layout from "./components/layout";
import Card from "./components/card";
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState(null);
    async function getPkmData() {
       return(
           axios
               .get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20%22`)
               .then((response) => {
                   setData(response.data.results);
               })
               .catch((error) => {
                   console.error(error);
               })
       )
    }
    useEffect(() => {
        getPkmData();
    }, []);

  return (
    <>
        <Layout />
        <div className="d-flex p-2 flex-lg-wrap arrangeCards">
            {
                data ? data.map( ( el, id ) => {
                        return(
                            <Card
                                el={ el }
                                id={ id }
                            />
                        )
                    })
                    : 'Sin elementos para mostrar'
            }
        </div>
    </>
  );
}

export default App;
