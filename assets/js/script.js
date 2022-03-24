//Declaração do botão de enviar formulário
const btn = document.getElementById("botao-enviar");
const ok = document.getElementById("ok");

//Evento ao clicar o botão enviar formulário
btn.addEventListener('click', (envent) => {
    event.preventDefault();

    email = document.getElementById("email").value;
    mensagem = document.getElementById("mensagem").value;
    const alerta = document.getElementById("msg_alerta");
    let cont = 0;
    //Verificação do e-mail do formulário
    let user = email.substr(0, email.indexOf("@"));
    let domain = email.substr(email.indexOf("@") + 1);
    domain = domain.substr(0, domain.indexOf("."))
    if (
        //Verificar se o usuário digitou algo
        (email != "")&&
        //Verificar se o usuário digitou o @
        (email.includes("@"))&&
        //Verificar se o usuário o último caractere é um ponto
        (email[email.length -1] !== ".")&&
        //Verificar se o usuário é maior que 32
        (user.length <= 32)&&
        //Verificar se o dominío é maior que 16
        (domain.length <= 16)
    ){
        cont += 1;
    }else {
        alerta.innerHTML = "Erro no envio: Endereço de e-mail inválido";
        ok.classList.remove("escondido")
        ok.classList.add("visivel");
    }
    //Verificar se o usuário digitou alguma mensagem na caixa de mensagem do formulário
    if(mensagem == false){
        alerta.innerHTML = "Erro no envio: insira uma mensagem";
        ok.classList.remove("escondido");
        ok.classList.add("visivel");
    }else{
        cont += 1;
    }

    if(cont === 2){
        alerta.innerHTML = `Obrigado pelo contato ${user}`;
        ok.classList.remove("escondido");
        ok.classList.add("visivel");
    }
})
//Botão de ok ao aparecer a mensagem da validação do formulário
ok.addEventListener('click', (evento) => {
    evento.preventDefault();

    ok.classList.remove("visivel");
    ok.classList.add("escondido");

    document.getElementById("msg_alerta").innerHTML = ""
    document.getElementById("mensagem").value = "";
    document.getElementById("email").value = "";

})

