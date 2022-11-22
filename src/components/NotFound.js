import {Link } from 'react-router-dom';

function NotFound(props){
    const {titulo, descricao, alternative_action} = props
    return(
        <div className='notfound'>
                            <h1>{titulo}</h1>
                            <p dangerouslySetInnerHTML={{__html: descricao}}></p>
                            <br/><br/>
                            <Link className='input-style submit' to="/">Voltar ao Início</Link>
                            <br/><br/><br/>
                            {alternative_action}
                            <br/><br/><br/>
                            <img src='/404.png' alt="error 404" width="300px" height="300px"></img>
                        </div>
    )
}

export default NotFound