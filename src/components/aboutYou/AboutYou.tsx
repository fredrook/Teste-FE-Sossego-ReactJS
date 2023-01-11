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

  const { setNext, setLoading } = useContext(UserContext);
  
  const navigate = useNavigate();

  function Return() {
      setNext("register");
  }

  function EndRegister() {
    setLoading(false)
    toast.success("Conta criada com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/dashboard")
  }

  return (
    <ContainerAY onSubmit={handleSubmit(EndRegister)}>
      <label htmlFor="cep" className="labelMaisInfo">
      Nos conte mais sobre você
      </label>
      <input type="text" id="maisInfo" {...register("maisInfo")} />
      <span>{errors.maisInfo?.message}</span>
      <div className="ContainerButtons">
        <button onClick={() => Return()} type="button" className="btn1">Anterior</button>
        <button type="submit" className="btn2">Finalizar</button>
      </div>
    </ContainerAY>
  );
};

export default AboutYouModal;
