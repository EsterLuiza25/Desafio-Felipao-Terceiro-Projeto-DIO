
class Heroy {
  
    constructor(nome, idade, tipo) {
      this.nome = nome 
      this.idade = idade 
      this.tipo = tipo 
    }
  
    
    atacar() {
      let ataque  
  
     
      if (this.tipo === "mago") {
        ataque = "magia"; 
      } else if (this.tipo === "guerreiro") {
        ataque = "espada";
      } else if (this.tipo === "monge") {
        ataque = "artes marciais"; 
      } else if (this.tipo === "ninja") {
        ataque = "shuriken"; 
      }
  
      
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  
  const mago = new Heroy("Vigar", 100, "mago");
  const guerreiro = new Heroy("Aron", 45, "guerreiro");
  const monge = new Heroy("Babu", 18, "monge");
  const ninja = new Heroy("Zir", 21, "ninja");
  
  
  mago.atacar();      
  guerreiro.atacar(); 
  monge.atacar();     
  ninja.atacar();     