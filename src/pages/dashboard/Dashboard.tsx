import { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
import { Container } from "./DashboardCSS";

const Dashboard = () => {
  const { register } = useContext(UserContext);

  return (
    <>
      {register && (
        <Container>
          
      </Container>
      )}
    </>
  
  )
};

export default Dashboard;
