const assert = require('assert');
const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('ServicoDePagamento', () => {

it('deve cadastrar pagamento da categoria cara', () => {
const servico = new ServicoDePagamento();

servico.pagar('9999-8888-7777', 'Energia Brasil', 250.45);

const resultado = servico.consultarUltimoPagamento();

assert.deepStrictEqual(resultado, {
codigoBarras: '9999-8888-7777',
empresa: 'Energia Brasil',
valor: 250.45,
categoria: 'cara'
});
});

it('deve cadastrar pagamento da categoria padrão', () => {
const servico = new ServicoDePagamento();

servico.pagar('1234-5678-0000', 'Internet Fibra', 89.90);

const resultado = servico.consultarUltimoPagamento();

assert.deepStrictEqual(resultado, {
codigoBarras: '1234-5678-0000',
empresa: 'Internet Fibra',
valor: 89.90,
categoria: 'padrão'
});
});

it('deve retornar somente o último pagamento realizado', () => {
const servico = new ServicoDePagamento();

servico.pagar('1111-1111', 'Conta Água', 45);
servico.pagar('2222-2222', 'Academia Fit', 180);

const resultado = servico.consultarUltimoPagamento();

assert.deepStrictEqual(resultado, {
codigoBarras: '2222-2222',
empresa: 'Academia Fit',
valor: 180,
categoria: 'cara'
});
});

});