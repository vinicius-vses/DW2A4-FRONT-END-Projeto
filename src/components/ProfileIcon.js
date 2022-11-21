import SmallIcon from "./SmallIcon"
import { Link, useNavigate } from "react-router-dom";

function ProfileIcon() { //O HREF DEVERÁ SER SUBSTITUÍDO PELA PÁGINA DO PERFIL DO USUÁRIO

    return (
        <div style={{ marginRight: '8px' }}>
            <SmallIcon
                src="http://cdn.onlinewebfonts.com/svg/img_24787.png"
                label="Imagem indicando local de clique para área do perfil do usuário" />
            <Link to="/meuperfil"><span>Meu perfil</span></Link>
        </div>
    )
}

export default ProfileIcon