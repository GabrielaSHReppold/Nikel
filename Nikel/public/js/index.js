const myModal = new bootstrap.Modal ("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

//LOGAR NO SISTEMA 
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;

    const account = getAccount(email);


    if(!account) {
        alert("Opps! Verifique o usuário ou a senha.");
        return;
    }

    if(account) {
        if(account.password !== password) {
            alert("Opps! Verifique o usuário ou a senha.");
            return;   
        }

        saveSession(email, checkSession);

     window.location.href = "home.html";

    }


});

//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-create-input1").value;
    const password = document.getElementById("password-create-input1").value;

    if(email.length < 5) {
        alert("Preencha o campo com um email válido.");
        return;
    }

    if(password.length < 4) {
        alert("Preencha a senha com no mínimo 4 digítos.");
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []
    });

    myModal.hide();

    alert("Conta criada com sucesso.");   
});


function checkLogged() {
    if (session) {
        sessionStorage.getItem("logged, session");
        logged = session;
    }

    if (logged) {
        saveSession(logged, session);
        window.location.href = "home.html";
    }
}


 function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
 }

 function saveSession(data, saveSession) {
    if (saveSession) {
        localStorage.setItem("session", data); // Use localStorage para salvar a sessão, se necessário.
    }

    sessionStorage.setItem("logged", data); // Use sessionStorage para salvar o status de logado.
}



 function getAccount(Key) {
    const account = localStorage.getItem(Key);

    if(account) {
        return JSON.parse(account);
    }

    return"";
 }



