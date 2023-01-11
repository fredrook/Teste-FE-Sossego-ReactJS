import { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
import { ContainerAY } from "./AboutYouCSS";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUser } from "../../interfaces/IUser";
/* import { toast } from "react-toastify"; */

const schema = yup.object({
  maisInfo: yup.string()
});

const AboutYouModal = () => {
  const {
    register,
    formState: { errors },
  } = useForm<IUser>({ resolver: yupResolver(schema) });

  return (
    <ContainerAY>
      <label htmlFor="cep" className="labelMaisInfo">
      Nos conte mais sobre você
      </label>
      <input type="text" id="maisInfo" {...register("maisInfo")} />
      <span>{errors.maisInfo?.message}</span>
      <div className="ContainerButtons">
        <button className="btn1">Anterior</button>
        <button className="btn2">Finalizar</button>
      </div>
    </ContainerAY>
  );
};

export default AboutYouModal;
