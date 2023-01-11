import styled from "styled-components";

export const ContainerRA = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  max-width: 85%;

  position: relative;
  top: 18%;

  .labelCep {
    position: relative;
    top: 0%;
    left: 0%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  #cep {
    position: relative;
    top: 1%;
    left: 0%;

    width: 390px;
    height: 44px;

    font-size: 16px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }

  .labelRua {
    position: relative;
    top: -15%;
    left: 54.5%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  #rua {
    position: relative;
    top: -13.6%;
    left: 52%;

    width: 390px;
    height: 44px;

    font-size: 16px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }

  .labelNumero {  
    position: relative;
    top: -9%;
    left: 0%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  #numero {
    position: relative;
    top: -7.5%;
    left: 0%;

    width: 185px;
    height: 44px;

    font-size: 16px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }

  .labelBairro {
    position: relative;
    top: -24%;
    left: 25%;


    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  #bairro {
    position: relative;
    top: -22%;
    left: 25%;

    width: 185px;
    height: 44px;

    font-size: 16px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }

  .labelCidade {
    position: relative;
    top: -38%;
    left: 52%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  #cidade {
    position: relative;
    top: -37%;
    left: 52%;

    width: 390px;
    height: 44px;

    font-size: 16px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }

  .labelPontoReferencia {
    position: relative;
    top: -30%;
    left: 0%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  #pontoRef {
    position: relative;
    top: -29%;
    left: 0%;

    width: 812px;
    height: 44px;

    font-size: 16px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }

  .ContainerButtons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    position: relative;
    top: -3%;
    left: 6%;

    .btn1 {
      width: 226px;
      height: 54px;

      margin-right: 24px;

      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      background: var(--color-grey400);
      color: white;

      border: none;
      border-radius: 4px;
    }

    .btn2 {
      width: 226px;
      height: 54px;

      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      background: var(--color-primary);
      color: white;

      border: none;
      border-radius: 4px;
    }
  }
`;
