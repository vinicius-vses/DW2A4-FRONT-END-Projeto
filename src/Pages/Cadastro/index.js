import React, { useState } from "react";
import { Container, Form, LinhaCadastro } from "./styles";
import Input from "../../Components/Input/index";
import Botao from "../../Components/Botao/index";
import { validarEmail, validarSenha, validarNome, validarConfirmarSenha } from "../../Utils/validadores";
import UserService from "../../Services/userService";
import { NavLink, useNavigate } from "react-router-dom";

const userService = new UserService();

const Cadastro = () => {
  const [loading, setLoading] = useState();
  const [form, setForm] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const { data } = await userService.cadastrar({
        nome: form.nome,
        email: form.email,
        password: form.password,
      });
      if (data) {
        const responseLogin = await userService.login({
          email: form.email,
          password: form.password
        });
        if (responseLogin === true) {
          alert("Usuário Cadastro com Sucesso!");
          navigate("/home");
        }
      }

      setLoading(false);
    } catch (error) {
      alert("Algo deu errado com o Cadastro " + error);
    }
  };

  const handleChange = (event) => {
    console.log("Digitando...", event.target.name, event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log("Form", form);
  };

  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.password) 
    && validarConfirmarSenha(form.password, form.confirmarSenha) 
    && validarNome(form.nome)
  };

  return (
    <Container>
      <Form>
        <h1>Cadastrar</h1>
        <p>Nome completo: </p>
        <Input
          name="nome"
          placeholder="Nome completo"
          onChange={handleChange}
          type="text"
        />
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
        <p>Confirme a senha: </p>
        <Input
          name="password"
          placeholder="Confirme a senha"
          onChange={handleChange}
          type="password"
        />
        <Botao
          type="submit"
          text="Fazer cadastro"
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
        <LinhaCadastro>
          <p>Já tem uma conta?</p>
          <NavLink to="login">Faça login</NavLink>
        </LinhaCadastro>
      </Form>
    </Container>
  );
};

export default Cadastro;
