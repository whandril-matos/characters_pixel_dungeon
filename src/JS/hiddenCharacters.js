document.addEventListener("DOMContentLoaded", function (){
    const getCharacter = [
        document.getElementById("warriorBT"),
        document.getElementById("mageBT"),
        document.getElementById("rogueBT"),
        document.getElementById("huntressBT"),
        document.getElementById("duelsitBT"),
    ]
    
    console.log(getCharacter[0])
    // Definindo uma classe chamada Pessoa
    class Pessoa {
        // Construtor para inicializar instâncias da classe
        constructor() {
            this.warrior = document.getElementById("warriorBT"),
            this.mage = document.getElementById("mageBT"),
            this.rogue = document.getElementById("rogueBT"),
            this.huntress = document.getElementById("huntressBT"),
            this.duelist = document.getElementById("duelsitBT")
        }
    
        addClickEvent(){
            this.mobileMenu.addEventListener("click", this.handlerClick)

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