import { CompTestComponent } from './comp-test.component';
import { TestBed } from '@angular/core/testing';

// Estrutura do teste unitário
describe('Testando componente de teste', () => {
  // Inicialização
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompTestComponent],
    }).compileComponents();
  });

  // Validar a variável texto
  it('Validar variável nome', () => {
    // Fixture
    const fixture = TestBed.createComponent(CompTestComponent);

    // Obter as variáveis e funções do componente
    const componente = fixture.componentInstance;

    // Validação
    expect(componente.nome).toEqual('rodrigo');
  });

  // Validar a variável média
  it('Validar o valor inicial da variável média', () => {
    // Fixture
    const fixture = TestBed.createComponent(CompTestComponent);

    // Obter as variáveis e funções do componente
    const componente = fixture.componentInstance;

    // Validação
    expect(componente.media).toEqual(0);
  });

  // Validar o retorno do método de cálculo
  it('Validar o método de cálculo', () => {
    // Fixture
    const fixture = TestBed.createComponent(CompTestComponent);

    // Obter as variáveis e funções do componente
    const componente = fixture.componentInstance;

    // Executar função
    const retorno = componente.calcularMedia(10, 8);

    // Validar
    expect(retorno).toEqual(9);
  });

  // Verificar se a inicialização da variável média é 0 e após executar
  // a função calculo o valor seja atribuido a variável média
  it('Variável e função', () => {
    // Fixture
    const fixture = TestBed.createComponent(CompTestComponent);

    // Obter as variáveis e funções do componente
    const componente = fixture.componentInstance;

    // Validar se a variável média possui o valor 0
    expect(componente.media).toEqual(0);

    // Executar função
    const retorno = componente.calcularMedia(5, 9);

    // Atribuir o retorno da função para a variável média
    componente.media = retorno;

    // Validar se a variável média possui o valor 7
    expect(componente.media).toEqual(7);
  });
});
