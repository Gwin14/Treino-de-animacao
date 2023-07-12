function trocar(){
    let artigo = document.getElementById('ATrocarCor')
    let texto = document.getElementById('TTrocarCor')


    if(artigo.classList.contains('ATrocarCor')){
    artigo.classList.add('ACrescer')
    artigo.classList.remove('ATrocarCor')

    texto.classList.add('TCrescer')
    texto.classList.remove('TTrocarCor')
    }else{
    artigo.classList.remove('ACrescer')
    artigo.classList.add('ATrocarCor')

    texto.classList.remove('TCrescer')
    texto.classList.add('TTrocarCor')
    }
}