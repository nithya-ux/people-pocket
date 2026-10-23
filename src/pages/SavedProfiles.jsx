import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../Redux/userSlice'

function SavedProfiles() {
  const dispatch = useDispatch()
  const savedUsers = useSelector(
    (state) => state.users.savedUsers
  )

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-2">Saved Profiles</h2>
      <p className="text-secondary mb-4">
        Your favourite people in one place.
      </p>
      <Link to="/" className="btn btn-outline-success mb-3">
       Back to Home
      </Link>

      {savedUsers.length === 0 ? (
        <div className="p-4 rounded-4 text-center bg-light">
          <h5>No saved profiles yet</h5>
          <p className="text-secondary mb-0">
            Go to home and save a profile to see it here.
          </p>
        </div>) 
        :
       (<div className="row g-4">{savedUsers.map((user) => (
            <div className="col-md-6 col-lg-4" key={user.login.uuid}>
              <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4 text-center">
                  <img  src={user.picture.large} alt={user.name.first} className="rounded-circle mb-3" width="90" height="90"/>

                  <h5 className="fw-bold">
                    {user.name.first} {user.name.last}
                  </h5>

                  <p className="text-secondary small">
                    {user.email}
                  </p>

                  <button className="btn btn-outline-danger" onClick={() =>
                      dispatch(removeUser(user.login.uuid))
                    }
                  > Remove Profile </button>

                </div>
               </div>
             </div>
           ))}
        </div>
      )}
    </div>
  )
}

export default SavedProfiles
