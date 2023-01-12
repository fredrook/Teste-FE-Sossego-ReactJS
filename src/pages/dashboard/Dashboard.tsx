import { useContext } from "react";
import CardUsers from "../../components/cardUsers/CardUsers";
import { UserContext } from "../../context/AuthContext";
import { ContainerDashb } from "./DashboardCSS";

const Dashboard = () => {
  const { userList } = useContext(UserContext);

  return (
    <ContainerDashb>
      <div className="divSubContainer">
        <ul>
          <CardUsers userValue={userList[userList.length - 1]} />
        </ul>
      </div>
    </ContainerDashb>
  );
};

export default Dashboard;
