import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { UserContext } from "../../context/AuthContext";


const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);

  const location = useLocation();

  if (loading) {
    return <div>Carregando ...</div>;
  }

  return user ? ( <Outlet/> 
  ) : (
  <Navigate to="/login" replace state={{from: location}}/>);
}; 

export default ProtectedRoutes;
