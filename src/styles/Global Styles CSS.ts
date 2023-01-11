import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary:          #5357B1; 
    --color-background:       #F0F2F6;
    --color-brown:            #c7a57a;
    --color-grey50:           #F8FAFB;
    --color-grey100:          #F0F2F6;
    --color-grey400:          #8C98A9;
    --color-green:            #00AE63;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;      
    font-size: 0.5em;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    scrollbar-gutter: stable;

    &::-webkit-scrollbar {
      width: 0.5rem;
      
    }
    &::-webkit-scrollbar-track {
      background: rgba(153, 168, 165, 0.3);
      border-radius: 0.3rem;
    }
    &::-webkit-scrollbar-thumb{
      background: var( --color-fontescura);
      border-radius: 0.3rem;
    }
  }

  .Toastify__toast-body{
    font-size: 3em;
    font-weight: 500;
  }

  input{
    padding: 10px;
  }

  h1, h2, h3, h4, p, span, div{
    font-family: 'Poppins';
    font-style: normal;
  }

  button {
    cursor: pointer;
    font-family: 'Poppins', normal;
  }

  input:focus {
    border: 1px solid var(--color-success);
  }
`;

export default GlobalStyle;
