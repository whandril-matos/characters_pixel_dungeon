document.addEventListener("DOMContentLoaded", function (){
    const getCharacter = [
        this.bT = document.getElementsByClassName("logo hero navLinkFade")
    ]
    
    console.log(getCharacter[0])
    // Definindo uma classe chamada Pessoa
    class Pessoa {
        // Construtor para inicializar instâncias da classe
        constructor() {
            this.warrior = document.getElementById("bT")
            
        }
    
        clcikOn(idOn){

            
        }
    
        // Método da classe
        apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
        }
    }
  
    // Criando uma instância da classe Pessoa
    const pessoa1 = new Pessoa('João', 30);
  
    // Chamando o método da classe
    pessoa1.apresentar(); // Saída: Olá, meu nome é João e tenho 30 anos.


})