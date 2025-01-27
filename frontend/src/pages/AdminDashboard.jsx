import {useAuth} from '../context/authContext.jsx'

function AdminDashboard() {
  const {user} = useAuth()
  return (
    <div className='text-5xl text-teal-400'>
      AdminDashoard {user.name}
    </div>
  )
}

export default AdminDashboard
