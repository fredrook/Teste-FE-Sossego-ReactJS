import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-background);
  width: 100vw;
  height: 100vh;

  img {
    width: 210px;
    height: 210px;
    border: none;
    border-radius: 20%;
    border: 5px solid var(--color-brown);
  }

  h1 {
    width: 44%;
    text-align: justify;
    color: var(--color-primary);
    font-size: 4.4em;
    font-weight: 600;
    line-height: 115%;
  }

  p {
    color: var(--color-primary);
    font-size: 4em;
    font-weight: 600;
    line-height: 115%;
  }

  .btnInit {
    border-radius: 50%;
    border: 5px solid var(--color-brown);
    background: var(--color-primary);
    color: var(--color-brown);
    font-size: 4.2em;
    line-height: 30px;
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
