import styled from "styled-components";

export const ContainerUI = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  top: 14%;

  width: 85%;

  .labelName {
    position: relative;
    top: 2%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  #name {
    position: relative;
    top: 2%;

    width: 810px;
    height: 48px;

    font-size: 16px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }

  .btnNext {
    position: relative;
    top: 2.3%;
    left: 78%;

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
`;

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;

  .labelPassword {
    display: flex;
    flex-direction: column;

    position: relative;
    top: 10%;
    left: 0%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  #password {
    position: relative;
    top: 15%;
    left: 0%;

    width: 370px;
    height: 48px;

    font-size: 16px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }

  .labelConfPassword {
    display: flex;
    flex-direction: column;

    width: 20%;

    position: relative;
    top: -39%;
    left: 54%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  #confirmPassword {
    position: relative;
    top: -35%;
    left: 54%;

    font-size: 16px;

    width: 370px;
    height: 48px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }
`;

export const AnotherDivInputs = styled.div`
  display: flex;
  flex-direction: column;

  .labelEmail {
    display: flex;
    flex-direction: column;

    position: relative;
    top: -22%;
    left: 0%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  #email {
    width: 370px;
    height: 48px;

    position: relative;
    top: -15%;
    left: 0%;

    font-size: 16px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }

  .labelDataNascimento {
    display: flex;
    flex-direction: column;

    width: 20%;

    position: relative;
    top: -72%;
    left: 54%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  #DataNascimento {
    width: 370px;
    height: 48px;

    position: relative;
    top: -65%;
    left: 54%;

    font-size: 16px;

    background-color: var(--color-grey100);

    border: none;
    border-radius: 4px;
  }
`;
