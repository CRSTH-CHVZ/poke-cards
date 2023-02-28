import React from 'react'

const card = ({el, id} ) => {
    console.log('el', el)
    console.log('id', id)
  return (
      <div className="card" style={{ width: '18rem', marginBottom: '20px'}} key={ id }>
          <img src="" className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">{ el.name }</h5>
                  <p className="card-text"><strong>National ID:</strong> .</p>
                  <p className="card-text"><strong>Attack:</strong> .</p>
                  <p className="card-text"><strong>Defense:</strong> .</p>
                  <p className="card-text"><strong>Speed:</strong> .</p>
              </div>
      </div>
  )
}

export default card
