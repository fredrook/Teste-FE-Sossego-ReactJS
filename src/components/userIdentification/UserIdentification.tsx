import {
  AnotherDivInputs,
  ContainerUI,
  DivInputs,
} from "./UserIdentificationCSS";
import { useForm } from "react-hook-form";
/* import { useContext } from "react";
import { UserContext } from "../../context/AuthContext"; */
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
/* import { toast } from "react-toastify"; */
import { IUser } from "../../interfaces/IUser";

const schema = yup.object({
  name: yup.string().required("Nome obrigatório!"),
  email: yup.string().email().required("Necessário um Email válido!"),
  password: yup
    .string()
    .min(6, "Min 6 Caracteres, 1 núm, 1 letra e um caracter especial!")
    .matches(/(\W)|_/)
    .required(),
  confirmPassword: yup
    .string()
    .min(6, "Necessita ser igual a senha!")
    .matches(/(\W)|_/)
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
  dataNascimento: yup
    .date()
    .min(10, "Favor inserir a data de nascimento.")
    .required(),
});

const UserIdentificationModal = () => {
  const {
    register,
    formState: { errors },
  } = useForm<IUser>({ resolver: yupResolver(schema) });

  return (
    <ContainerUI>
      <label htmlFor="name" className="labelName">
        Nome
      </label>
      <input type="text" id="name" {...register("name")} />
      <span>{errors.name?.message}</span>

      <DivInputs>
        <label htmlFor="password" className="labelPassword">
          Senha
        </label>
        <input type="text" id="password" {...register("password")} />
        <span>{errors.password?.message}</span>
        <label htmlFor="confirmPassword" className="labelConfPassword">
          Confirmar Senha
        </label>
        <input
          type="text"
          id="confirmPassword"
          {...register("confirmPassword")}
        />
        <span>{errors.confirmPassword?.message}</span>
      </DivInputs>

      <AnotherDivInputs>
        <label htmlFor="email" className="labelEmail">
          Email
        </label>
        <input type="text" id="email" {...register("email")} />
        <span>{errors.email?.message}</span>
        <label htmlFor="DataNascimento" className="labelDataNascimento">
          Data de Nascimento
        </label>
        <input
          type="text"
          id="DataNascimento"
          {...register("dataNascimento")}
        />
        <span>{errors.dataNascimento?.message}</span>
      </AnotherDivInputs>

      <button className="btnNext">Próximo passo</button>
    </ContainerUI>
  );
};

export default UserIdentificationModal;
