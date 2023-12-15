import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="logo" className='logo' />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum cupiditate quia veniam. Eaque, saepe. Consequuntur repudiandae fuga, tempora commodi sapiente enim deleniti facilis illo. Nam corporis assumenda dignissimos atque omnis.</p>
          <button className='btn btn-hero'>login/register</button>
        </div>
        <img src={main} alt="job-hunt" className='img main-img' />
      </div>
    </main>
  )
}

export default Landing
