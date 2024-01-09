import { NavLink } from "react-router-dom"
import links from "../utils/links"


const NavLinks = ({toogle}) => {
  return (
    <div className="nav-links">
            {links.map(link => {
              const { id, text, path, icon } = link
              return (
                <NavLink
                  to={path} className='nav-link'
                  key={id}
                  onClick={()=>toogle()}
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              )
            })}
          </div>
  )
}

export default NavLinks
