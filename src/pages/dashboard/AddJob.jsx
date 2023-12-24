import { useDispatch, useSelector } from "react-redux"
import Wrapper from "../../assets/wrappers/DashboardFormPage"
import { FormRow, FormRowSelect } from "../../components"
import { toast } from "react-toastify"
import { clearValues, createJob, handleChange } from "../../features/job/jobSlice"
import { useEffect } from "react"


const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId
  } = useSelector(store => store.job)
  const { user } = useSelector(store => store.user)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position || !company || !jobLocation) {
      toast.error('Please Fill Out All Fields')
      return
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }))
  }

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }

  useEffect(() => {
    dispatch(handleChange({
      name: 'jobLocation',
      value: user.location
    }))
  }, [])

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className="form-center">

          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            name='jobLocation'
            labelText='job location'
            value={jobLocation}
            handleChange={handleJobInput}
          />

          <FormRowSelect

            name='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions} />

          <FormRowSelect
            labelText='job type'
            name='jobType'
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions} />

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
              disabled={isLoading}
            > clear</button>

            <button
              type="submit"
              className="btn btn-block btnb-submit"
              onClick={handleSubmit}
              disabled={isLoading}

            >submit</button>
          </div>

        </div>

      </form>


    </Wrapper>
  )
}

export default AddJob
