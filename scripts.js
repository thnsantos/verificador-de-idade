  function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if (fano.value.length == 0 || fano.value > ano) {
      alert("[ERRO]Verificação Incorreta, Tente novamente")
    } else {
      var fsex = document.getElementsByName("radsex")
      var idade = ano - fano.value;
      var genero = ""
      var img = document.createElement("img")
      img.setAttribute("id", "png")
    

      if (fsex[0].checked) {
        genero = "Homem"
        if (idade >= 0 && idade < 10) {
          img.setAttribute("src", "assets/criançaHomem.png")
        } else if (idade < 21) {
          img.setAttribute("src", "assets/jovemHomem.png")
        } else if (idade < 50) {
           img.setAttribute("src", "assets/adultoHomem.png")
        } else {
           img.setAttribute("src", "assets/idosoHomem.png")
        }

      } else {
        genero = "Mulher"
        if (idade >= 0 && idade < 10) {
          img.setAttribute("src", "assets/criançaMulher.png")
        } else if (idade < 21) {
          img.setAttribute("src", "assets/jovemMulher.png")
        } else if (idade < 50) {
           img.setAttribute("src", "assets/adultoMulher.png")
        } else {
           img.setAttribute("src", "assets/idosoMulher.png")
        }
      }

      res.style.textAlign = `center`
      res.innerHTML = `Foi detectato ${genero} com ${idade} anos de idade`
      res.appendChild(img)
    }
  } 