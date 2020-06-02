import React from 'react'
import Moment from 'react-moment'

export default ({launch}) => {
  const success = launch.launch_success ? 'text-success' : 'text-dager'
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className='col-md-9 text-left'>
          <h2>
            Mission: <span className={success}>{launch.mission_name}</span>
          </h2>
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{launch.launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary">Launch Details</button>
        </div>
      </div>
    </div>
  )
}
