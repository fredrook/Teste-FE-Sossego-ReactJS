import styled from "styled-components";

export const ContainerUC = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  background-color: var(--color-grey50);

  .divSubContainer {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;

    background-color: var(--color-grey100);

    .divCard {
      position: relative;
      top: 0%;
      left: 50%;

      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;

      width: 1017px;
      height: 741px;

      background-color: #ffffff;
      border: 2px solid #f0f2f6;
      box-shadow: 0px 4px 31px #eef1f5;
      border-radius: 8px;

      h1 {
        position: fixed;
        top: 19%;
        left: 29%;

        font-weight: 500;
        font-size: 36px;
        line-height: 54px;
      }

      .divIcons {
        display: flex;
        justify-content: space-around;
        align-items: center;

        position: fixed;
        top: 30%;
        left: 28.5%;

        width: 36%;
        height: 52px;

        .englobIcos {
          display: flex;
          align-items: center;
          justify-content: center;

          margin-right: 7%;

          width: 50px;
          height: 50px;

          border-radius: 50%;

          background: var(--color-grey100);

          .icons {
            width: 24px;
            height: 24px;
            color: var(--color-grey400);
          }
        }
        .p1 {
          margin-left: -6%;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
        }
        .p2 {
          margin-left: -6%;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
        }
        .p3 {
          margin-left: -6%;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }
`;
