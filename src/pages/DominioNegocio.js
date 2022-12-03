import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

function DominioNegocio(props) {
  const isLogged = localStorage.getItem("isLogged") === "true";
  const navigate = useNavigate();

  return (
    <>
      <h1 className="sobre">Sobre Nós</h1>
      <p>
        O projeto Phi4Free é uma rede social de educadores e aprendizes que se
        propõe a trazer materiais didáticos diversos divididos nas seguintes
        categorias:
      </p>

      <ul>
        <li>Educação Financeira</li>
        <li>Educação Física e Mental</li>
        <li>Educação Filosófica</li>
        <li>Educação Funcional</li>
      </ul>

      <p>
        Para tal, usuários que desejem se cadastrar como Educadores podem o
        fazer e, após passar por um processo de curadoria são dados a permissão
        para postar novos artigos e materiais que desejem.
      </p>

      <p>
        Dentro de cada um das categorias acima, será dada prioridade às
        seguintes subdivisões, podendo ser adicionadas novas com o desenvolver
        da aplicação
      </p>
      <div className="flex-container">
      

      <ul>
      <p className="subtitulo">Educação Financeira:</p>
        <li>Finanças pessoais;</li>
        <li>Conceitos básicos;</li>
        <li>Investimentos;</li>
        <li>Empreendedorismo;</li>
        <li>Impostos;</li>
        <li>Metas de vida;</li>
        <li>Mercados e setores;</li>
        <li>Globalização;</li>
        <li>Economia global;</li>
        <li>História da economia;</li>
        <li>Mercado fiduciário e digital;</li>
      </ul>

      

      <ul>
      <p className="subtitulo">Educação Filosófica:</p>
        <li>História da Filosofia;</li>
        <li>Movimentos filosóficos;</li>
        <li>Figuras importantes;</li>
        <li>Ética;</li>
        <li>Mitos;</li>
        <li>Religiões;</li>
        <li>Literatura;</li>
      </ul>

      
        
        <ul>
        <p className="subtitulo">Educação Física e Mental</p>
          <li>Conceitos básicos de saúde e do corpo;</li>
          <li>Conceitos básicos de bioquímica;</li>
          <li>Nutrição;</li>
          <li>Exercício físico (esportes, etc);</li>
          <li>Boas práticas;</li>
          <li>Psicologia;</li>
          <li>Neurologia;</li>
          <li>Genética;</li>
          <li>Higiene;</li>
          <li>Saúde mental;</li>
          <li>Meditação;</li>
          <li>Medicina oriental e tradicional;</li>
        </ul>

        

        <ul>
        <p className="subtitulo">Educação Funcional</p>
          <li>Cozinha;</li>
          <li>Limpeza;</li>
          <li>Direção de veículos;</li>
          <li>Costura; Construção;</li>
          <li>Elétrica;</li>
          <li>Manutenção de itens;</li>
          <li>Computação; Ferramentas computacionais;</li>
          <li>Jardinagem;</li>
          <li>Arte e artesanatos;</li>
          <li>Gerência de tempo;</li>
          <li>Organização doméstica;</li>
          <li>Soft Skills;</li>
          <li>Matemática utilitária;</li>
          <li>Escrita dissertativa;</li>
          <li>Cuidados de infantojuvenis;</li>
          <li>Cuidados de pets;</li>
        </ul>
      </div>
    </>
  );
}

export default DominioNegocio;
