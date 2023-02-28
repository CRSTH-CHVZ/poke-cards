import Layout from "./components/layout";
import Card from "./components/card";
import {useEffect, useState} from "react";
import {getPkmPage} from "./components/services/getPkmnByPage";

function App() {
    const [data, setData] = useState(null);
    useEffect(() => {
        return () => {
            getPkmPage().then( res => {
                setData(res.results)
            })
        }
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
                                key={ id }
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
