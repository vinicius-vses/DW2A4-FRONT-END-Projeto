import SmallIcon from "./SmallIcon"

function ProfileIcon(props) { //O HREF DEVERÁ SER SUBSTITUÍDO PELA PÁGINA DO PERFIL DO USUÁRIO
    const { onClick } = props
    return (
        <div>
            <SmallIcon
                src="http://cdn.onlinewebfonts.com/svg/img_24787.png"
                label="Imagem indicando local de clique para área do perfil do usuário" />
            <a
                className="default-link-appearance"
                href="blank"
                target="_self"
                onClick={onClick}>
                Meu perfil
            </a>
        </div>
    )
}

export default ProfileIcon