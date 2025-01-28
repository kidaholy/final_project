import { useAuth } from "../context/authContext.jsx";

function AdminDashboard() {
  const { user } = useAuth();

  // lets create protected and private authorization

  return (
    <div className="text-5xl text-teal-400">
      AdminDashoard {user && user.name}
    </div>
  );
}

export default AdminDashboard;
