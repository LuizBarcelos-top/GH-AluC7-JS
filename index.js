import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// const cliente1 = new Cliente();
// cliente1.nome = "Robert";
// cliente1.cpf = 12332132117;

// const cliente2 = new Cliente();
// cliente2.nome = "Mick";
// cliente2.cpf = 12332132118;

// const ContaCorrenteRobert = new ContaCorrente();
// ContaCorrenteRobert.agencia = 1001;
// ContaCorrenteRobert.cliente = cliente1;
// ContaCorrenteRobert.depositar(1000);

// const ContaCorrenteMick = new ContaCorrente();
// ContaCorrenteMick.agencia = 1001;
// ContaCorrenteMick.cliente = cliente2;

// const contaX = new ContaCorrente();
// contaX.cliente = new Cliente();
// contaX.cliente.nome = "Humberto G";
// contaX.cliente.cpf = 123456456;
// contaX.agencia = 1002;

const clienteX = new Cliente("Renato R", 12332143212);
const contaX = new ContaCorrente(clienteX, 1001);

const clienteY = new Cliente("Rita L", 98765456722);
const contaY = new ContaCorrente(clienteY, 1003);

// ContaCorrenteRobert.transferir(500, ContaCorrenteMick);


// console.log(ContaCorrenteRobert);
// console.log(ContaCorrenteMick);


console.log(ContaCorrente.numeroDeContas);



