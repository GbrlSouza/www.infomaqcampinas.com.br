function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Por favor, preencha os campos de usuário e senha.");
    } else if (username === "infomaq" && password === "06069") {
        alert("Login bem sucedido.");
        window.open("./../restrito/index.html");
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
}
