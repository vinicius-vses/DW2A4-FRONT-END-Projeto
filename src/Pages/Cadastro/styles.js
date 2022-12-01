import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 100vw;
  background-color: #205542;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 450px;
  gap: 30px 0px;
  width: 100%;
  padding: 3rem;
  flex-direction: column;
  border-radius: 5px;
  background-color: #4ACF9F;

  h1 {
    color: black;
    font-size: 30px;
    font-weight: bold;

  }

  p {
    color: black;
    font-size: 16px;
    font-weight: light;
  }

  a {
    color: #205542;
    font-size: 15px;
    text-decoration: underline;
    font-weight: bold;
  }
`;

export const LinhaCadastro = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 25px;
  align-items: center;
`
