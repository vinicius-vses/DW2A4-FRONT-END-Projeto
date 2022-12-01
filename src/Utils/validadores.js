const validarEmail = (email) => {
    email?.toString().includes("@") && email?.toString().includes(".")
}

const validarSenha = (password) => {
    return password?.toString().length > 8
}

const validarNome = (nome) => {
    return nome?.toString().length > 2
}

const validarConfirmarSenha = (password, confirmarSenha) => {
    return validarSenha(password) && password === confirmarSenha
}

export {
    validarEmail,
    validarSenha,
    validarConfirmarSenha,
    validarNome
}