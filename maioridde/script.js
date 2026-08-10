function calcularIdade() {
    var ano = parseInt(document.getElementById('ano').value)
    var res = document.getElementById('res')
    var anoAtual = new Date().getFullYear()
    var idade = anoAtual - ano

    if (idade >= 18) {
        res.textContent = `Você tem ${idade} anos / Maior de idade ✅`
    } else {
        res.textContent = `Você tem ${idade} anos / Menor de idade ❌`
    }
}