function Login(event) {
    event.preventDefault();
    var usuario = document.getElementsByName('username')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;
    senha = senha.toLowerCase();
  
    if (usuario == "infomaq" && senha == "06069") {
      alert("dados corretos");
      window.location = "index.html";
    }else{
      alert("Dados incorretos, tente novamente");
    }
  }