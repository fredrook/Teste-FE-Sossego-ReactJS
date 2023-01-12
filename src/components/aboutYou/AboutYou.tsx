import { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
import { ContainerAY } from "./AboutYouCSS";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUser } from "../../interfaces/IUser";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const schema = yup.object({
  maisInfo: yup.string()
});

const AboutYouModal = () => {
  const {
    register, handleSubmit,
    formState: { errors },
  } = useForm<IUser>({ resolver: yupResolver(schema) });

  const { createNewUser, setNext, setLoading, userList, setUserList, user } = useContext(UserContext);
  
  const navigate = useNavigate();

  function returnLastPage() {
      setNext("register");
  }

  function endRegister(data: IUser) {
    createNewUser(data)
    setUserList([...userList, user ])
    setLoading(false)
    navigate("/dashboard")
    toast.success("Conta criada com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <ContainerAY onSubmit={handleSubmit(endRegister)}>
      <label htmlFor="cep" className="labelMaisInfo">
      Nos conte mais sobre você
      </label>
      <input type="text" id="maisInfo" {...register("maisInfo")} />
      <span>{errors.maisInfo?.message}</span>
      <div className="ContainerButtons">
        <button onClick={() => returnLastPage()} type="button" className="btn1">Anterior</button>
        <button type="submit" className="btn2">Finalizar</button>
      </div>
    </ContainerAY>
  );
};

export default AboutYouModal;
