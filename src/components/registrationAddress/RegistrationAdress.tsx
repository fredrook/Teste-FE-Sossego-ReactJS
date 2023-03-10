import { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
import { ContainerRA } from "./RegistrationAdressCSS";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUser } from "../../interfaces/IUser";
import { toast } from "react-toastify";

const schema = yup.object({
  cep: yup.string().required("Cep obrigatório!"),
  rua: yup.string().required("Rua obrigatório!"),
  numero: yup.string().required("Número obrigatório!"),
  bairro: yup.string().required("Bairro é obrigatório!"),
  cidade: yup.string().required("Cidade obrigatório!"),
  pontoRef: yup.string(),
});

const RegistrationAdressModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({ resolver: yupResolver(schema) });

  const { createNewUser, setNext } = useContext(UserContext);

  function anotherPage(data: IUser) {
    createNewUser(data);
    setNext("aboutyou");
    toast.success("Sucesso, próximo passo!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function Back() {
    setNext("");
  }

  return (
    <ContainerRA onSubmit={handleSubmit(anotherPage)}>
      <label htmlFor="cep" className="labelCep">
        CEP
      </label>
      <input type="text" id="cep" {...register("cep")} />
      <span className="Error1">{errors.cep?.message}</span>
      <label htmlFor="rua" className="labelRua">
        Rua
      </label>
      <input type="text" id="rua" {...register("rua")} />
      <span className="Error2">{errors.rua?.message}</span>
      <label htmlFor="numero" className="labelNumero">
        Número
      </label>
      <input type="text" id="numero" {...register("numero")} />
      <span className="Error3">{errors.numero?.message}</span>
      <label htmlFor="bairro" className="labelBairro">
        Bairro
      </label>
      <input type="text" id="bairro" {...register("bairro")} />
      <span className="Error4">{errors.bairro?.message}</span>
      <label htmlFor="cidade" className="labelCidade">
        Cidade
      </label>
      <input type="text" id="cidade" {...register("cidade")} />
      <span className="Error5">{errors.cidade?.message}</span>
      <label htmlFor="pontoRef" className="labelPontoReferencia">
        Ponto de Referência
      </label>
      <input type="text" id="pontoRef" {...register("pontoRef")} />
      <span>{errors.pontoRef?.message}</span>
      <div className="ContainerButtons">
        <button type="button" onClick={() => Back()} className="btn1">
          Anterior
        </button>
        <button type="submit" className="btn2">
          Próximo passo
        </button>
      </div>
    </ContainerRA>
  );
};

export default RegistrationAdressModal;
