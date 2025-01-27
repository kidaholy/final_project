import { useNavigate } from 'react-router-dom'
import {useAuth} from '../context/authContext.jsx'

function AdminDashboard() {
  const {user} = useAuth()
  const navigate = useNavigate()
  const {loading} = useAuth()
  if(loading) {
    return <div>Loading...</div>
  }
  if(!user) {
    navigate("/login")
  }
  return (
    <div className='text-5xl text-teal-400'>
      {/*  {user && user.name} */}
      AdminDashoard
    </div>
  )
}

export default AdminDashboard
