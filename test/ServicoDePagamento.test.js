const assert = require('assert');
const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('ServicoDePagamento', () => {

    it('deve cadastrar pagamento caro', () => {
        const servico = new ServicoDePagamento();

        servico.pagar('123', 'Samar', 150);

        const pagamento = servico.consultarUltimoPagamento();

        assert.strictEqual(pagamento.categoria, 'cara');
    });

    it('deve cadastrar pagamento padrão', () => {
        const servico = new ServicoDePagamento();

        servico.pagar('456', 'Netflix', 50);

        const pagamento = servico.consultarUltimoPagamento();

        assert.strictEqual(pagamento.categoria, 'padrão');
    });

});