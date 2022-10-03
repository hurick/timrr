import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoTimrr from '../../assets/icons/logo.svg'

import { HeaderContainer, HeaderNav } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home" end>
        <img src={logoTimrr} />
      </NavLink>

      <HeaderNav>
        <NavLink to="/" className="hn__anchor" title="Timer" end>
          <Timer size={26} />
        </NavLink>

        <NavLink to="/history" className="hn__anchor" title="History" end>
          <Scroll size={26} />
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  )
}
