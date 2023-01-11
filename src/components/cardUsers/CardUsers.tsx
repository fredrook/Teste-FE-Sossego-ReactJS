import { IUser } from "../../interfaces/IUser";
import { TagDiv, TagLi } from "./CardUsersCSS";
import { useNavigate } from "react-router";

interface IPropsUserValue {
  userValue: IUser;
}

const CardUsers = ({ userValue }: IPropsUserValue) => {
  const navigate = useNavigate();

  function Beginning() {
    navigate("/")
  }
  return (
    <TagLi>
      <TagDiv>
        <h2>Usuário criado!</h2>
        <p className="p1">Nome</p>
        <span className="span1">{userValue.name}</span>
        <p className="p2">Email</p>
        <span className="span2">{userValue.email}</span>
        <div className="separacao"></div>
        <p className="p3">Rua</p>
        <span className="span3">{userValue.rua}</span>
        <p className="p4">Número</p>
        <span className="span4">{userValue.numero}</span>
        <p className="p5">CEP</p>
        <span className="span5">{userValue.cep}</span>
        <button onClick={() => Beginning()}>Novo usúario</button>
      </TagDiv>
    </TagLi>
  );
};

export default CardUsers;
