import { Link } from 'react-router-dom'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'





const Landing = () => {
  return (
    <Wrapper>
      <nav>
     <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum cupiditate quia veniam. Eaque, saepe. Consequuntur repudiandae fuga, tempora commodi sapiente enim deleniti facilis illo. Nam corporis assumenda dignissimos atque omnis.</p>
          <Link to= '/register' className='btn btn-hero'>login/register</Link>
        </div>
        <img src={main} alt="job-hunt" className='img main-img' />
      </div>
    </Wrapper>
  )
}



export default Landing
