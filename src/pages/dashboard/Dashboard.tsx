import { useContext } from "react";
import CardUsers from "../../components/cardUsers/CardUsers";
import { UserContext } from "../../context/AuthContext";
import { IUser } from "../../interfaces/IUser";
import { ContainerDashb } from "./DashboardCSS";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <ContainerDashb >
      <div className="divSubContainer" >
        <ul>
          {user.map((elem: IUser, index: number) => (
            <CardUsers key={index} userValue={elem} />
          ))}
        </ul>
      </div>
    </ContainerDashb>
  );
};

export default Dashboard;
