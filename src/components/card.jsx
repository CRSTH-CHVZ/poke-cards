import React, {useEffect, useState} from 'react'
import {getPkmInfo} from "./services/getPkmnById";

const Card = ({el, id} ) => {
    const [pkmnInfo, setPkmnInfo] = useState(null);
    const pkId = el.url.split('/')[6];
    useEffect(() => {
        return () => {
            getPkmInfo( pkId ).then( res => {
                setPkmnInfo(res)
            })
        }
    }, []);
  return (
      <div className="card" style={{ width: '18rem', marginBottom: '20px'}} key={ id }>
          <img src={ pkmnInfo?.sprites?.front_default } className="card-img-top"/>
              <div className="card-body">
                  <h5 className="card-title cardTitle"><strong>{ el.name }</strong></h5>
                  <p className="card-text"><strong>National ID:</strong> { pkmnInfo?.id }.</p>
                  <p className="card-text"><strong>Attack:</strong> { pkmnInfo?.stats[1]?.base_stat }.</p>
                  <p className="card-text"><strong>Defense:</strong> { pkmnInfo?.stats[2]?.base_stat }.</p>
                  <p className="card-text"><strong>Speed:</strong> { pkmnInfo?.stats[5]?.base_stat }.</p>
              </div>
      </div>
  )
}

export default Card
