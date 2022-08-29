class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Robert";
cliente1.cpf = 12332132117;
cliente1.agencia = 1000;
cliente1.saldo = 0;

cliente2.nome = "Mick";
cliente2.cpf = 12332132118;
cliente2.agencia = 1000;
cliente2.saldo = 0;


console.log(cliente1, cliente2)
