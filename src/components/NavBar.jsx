
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaCaretDown, FaUserCircle } from 'react-icons/fa'
import Logo from './Logo'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, toogleSidebar } from '../features/user/userSlice'

const Navbar = () => {
const [showLogout, setShowLogout] = useState(false)
  const { user } = useSelector(store => store.user)
  const dispatch = useDispatch()


  return (
    <Wrapper>
      <div className="nav-center">
        <button type='button' className='toogle-btn toggle-pointer' onClick={()=>dispatch(toogleSidebar())}
        > <FaAlignLeft /> </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type='button'
            className='btn'
            onClick={()=> setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout? 'dropdown show-dropdown': 'dropdown'}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={() => {
                dispatch(logoutUser('Logout'));
              }}
            >logout</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
