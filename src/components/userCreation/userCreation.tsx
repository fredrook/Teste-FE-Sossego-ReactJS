import { ContainerUC } from "./userCreationCSS";
import { RiUser5Fill } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import { RiFileTextFill } from "react-icons/ri";
import UserIdentificationModal from "../userIdentification/UserIdentification";
import RegistrationAdressModal from "../registrationAddress/RegistrationAdress";
import AboutYouModal from "../aboutYou/AboutYou";
import { useContext } from "react";
import { UserContext } from "../../context/AuthContext";

const UserCreation = () => {
  const { next } = useContext(UserContext);

  return (
    <ContainerUC next={next}>
      <div className="divSubContainer">
        <div className="divCard">
          <h1>Criação de usuário</h1>
          <div className="divIcons">
            <div className="englobIcos">
              <RiUser5Fill className="icons icon1"/>
            </div>
            <p className="p1">Identificação do Usuário</p>
            <div className="englobIcos">
              <AiTwotoneHome className="icons icon2" />
            </div>
            <p className="p2">Endereço do usuário</p>
            <div className="englobIcos">
              <RiFileTextFill className="icons icon3" />
            </div>
            <p className="p3">Sobre Você</p>
          </div>
          {next === "" && <UserIdentificationModal />}

          {next === "register" && <RegistrationAdressModal />}

          {next === "aboutyou" && <AboutYouModal />}
        </div>
      </div>
    </ContainerUC>
  );
};

export default UserCreation;
