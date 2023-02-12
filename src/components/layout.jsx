import React from 'react'
import pokeballLogo from '../components/images/pokeball.png'

const layout = () => {
  return (
      <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
              <img src={ pokeballLogo } width="30" height="30" class="d-inline-block align-top" alt=""/>
                  Poke Cards
          </a>
      </nav>
  )
}

export default layout
