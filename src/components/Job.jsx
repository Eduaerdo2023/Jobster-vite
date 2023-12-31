import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa"
import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/Job"
import { useDispatch } from "react-redux"


const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  status,
}) => {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <header>
        <div className="main-icon"> {company.charAt(0)}</div>
        <div className="info">
          <h5>  {position}</h5>
          <p>{company}</p>
        </div>
      </header>
<div className="content">
  <div className="content-center">
    <div className={`status ${status}`}>{status}</div>
  </div>
  <footer>
    <div className="actions">
      <Link to ='/add-job' className="btn edit-btn" onClick={()=> {
        console.log('edit job');
      }}></Link>
    </div>
  </footer>
</div>

      {jobType}
      {status}
      {jobLocation}
    </Wrapper>
  )
}

export default Job
