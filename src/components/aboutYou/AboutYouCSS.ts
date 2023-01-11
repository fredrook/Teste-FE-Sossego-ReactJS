import styled from "styled-components";

export const ContainerAY = styled.form`
  display: flex;
  flex-direction: column;

  .labelMaisInfo {
    position: relative;
    top: 20%;
    left: 0%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  #maisInfo {
    position: relative;
    top: 25%;
    left: 0%;

    width: 815px;
    height: 232px;

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
    top: 64%;
    left: 7%;

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
