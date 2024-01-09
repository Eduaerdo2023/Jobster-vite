import { FaTimes } from "react-icons/fa"
import Wrapper from "../assets/wrappers/SmallSidebar"

import Logo from "./Logo"
import { useDispatch, useSelector } from "react-redux"
import { toogleSidebar } from "../features/user/userSlice"
import NavLinks from "./NavLinks"



const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector(store => store.user)
  const dispatch = useDispatch()
  const toogle = () => {
    dispatch(toogleSidebar())
  }
  return (
    <Wrapper>
      <div className={isSidebarOpen ? 'sidebar-container show-sidebar ' : 'sidebar-container '}>
        <div className="content">
          <button className="close-btn" onClick={toogle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
            <NavLinks  toogle={toogle}/>
          </header>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
