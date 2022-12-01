import React, { useState } from "react";
import { Container, Form, LinhaCadastro } from "./styles";
import Input from "../../Components/Input/index";
import Botao from "../../Components/Botao/index";
import { validarEmail, validarSenha } from "../../Utils/validadores";
import UserService from "../../Services/userService";
import { NavLink, useNavigate } from "react-router-dom";

const userService = new UserService();

const Login = () => {
  const [loading, setLoading] = useState();
  const [form, setForm] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await userService.login(form);
      if (res === true) {
        alert("Logado");
        navigate('/home')
      }

      setLoading(false);
    } catch (error) {
      alert("Algo deu errado com o Login " + error);
    }
  };

  const handleChange = (event) => {
    console.log("Digitando...", event.target.name, event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log("Form", form);
  };

  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.password);
  };

  return (
    <Container>
      <Form>
        <h1>Conectar</h1>
        <p>E-mail institucional: </p>
        <Input
          name="email"
          placeholder="Digite o seu e-mail institucional"
          onChange={handleChange}
          type="email"
        />
        <p>Senha: </p>
        <Input
          name="password"
          placeholder="Digite a sua senha"
          onChange={handleChange}
          type="password"
        />
        <Botao
          type="submit"
          text="Fazer login"
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
        <LinhaCadastro>
          <p>Não possui conta?</p>
          <NavLink to="cadastrar">Cadastrar-se</NavLink>
        </LinhaCadastro>
      </Form>
    </Container>
  );
};

export default Login;
