
import { useDispatch, useSelector } from 'react-redux'
import { addUser, saveUser, clearUsers } from '../Redux/userSlice'
import { Link } from 'react-router-dom'


function Home() {
  const dispatch = useDispatch()
  const generatedUsers = useSelector(
    (state) => state.users.generatedUsers
  )

  const getRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/')
      const data = await response.json()

      dispatch(addUser(data.results[0]))
    } catch (error) {
      console.log(error)
      alert('Could not load user. Please try again.')
    }
  }

  return (
    <div className="container py-5">
      <div className="mb-4">
        <h2 className="fw-bold">PeoplePocket</h2>
        <Link to="/saved" className="btn btn-outline-success mb-3">
        Saved Profiles
        </Link>
        <p className="text-secondary">
          Your little people directory
        </p>
      </div>

      <div
        className="p-4 rounded-4 mb-4"
        style={{ backgroundColor: '#eef3e9' }}
      >
        <h3 className="fw-bold">Discover people</h3>

        <p className="text-secondary">
          Find someone new and add them to your directory.
        </p>

        <button
          className="btn btn-success"
          onClick={getRandomUser}
        >
          Generate Random User
        </button>
      </div>

      <div className="row g-4">
        {generatedUsers.map((user, index) => (
          <div
            className="col-md-6 col-lg-4"
            key={user.login.uuid}
          >
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body p-4 text-center">
                <p className="text-secondary">
                  Profile #{index + 1}
                </p>

                <img  src={user.picture.large} alt={user.name.first} className="rounded-circle mb-3" width="100"  height="100" />

                <h5 className="fw-bold">
                  {user.name.first} {user.name.last}
                </h5>
                <p className="text-secondary small">
                  {user.email}
                </p>
                <p>Gender: {user.gender}</p>
                <p>Country: {user.location.country}</p>

                <button
                  className="btn btn-outline-success"
                  onClick={() => dispatch(saveUser(user))}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-end mt-4">
     <button className="btn btn-outline-danger" onClick={() => {
          if (window.confirm('Clear all generated users?')) {
           dispatch(clearUsers())
          }
        }}
     > Clear All Generated Users</button>
     </div>
    </div>
  )
}

export default Home

