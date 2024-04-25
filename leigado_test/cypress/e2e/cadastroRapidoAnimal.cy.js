import CadastroRapidoAnimal from "../pages/cadastroRapidoAnimal";

const login = require("../fixtures/dados.json");
const infoAnimais = require("../fixtures/animais.json");
const cadastroAnimal = new CadastroRapidoAnimal();
const animal1 = infoAnimais.animal1;
const animal2 = infoAnimais.animal2;
const animal3 = infoAnimais.animal3;

describe("template spec", () => {
  beforeEach("login running", () => {
    cy.visit("http://192.168.0.122:4200/");
    cadastroAnimal.doLogin(login.email, login.password, login.name);
  });

  it("Cadastro realizado com sucesso, esperado um alert-success", () => {
    cadastroAnimal.goToCadastroAnimaisRapido();
    cadastroAnimal.cadastroAnimalPrimeiroAnimal(
      animal1.brinco,
      animal1.nome,
      animal1.lote,
      animal1.raca,
      animal1.sexo,
      animal1.data_nasc
    );
    cadastroAnimal.cadastroAnimalSegundoAnimal(
      animal2.brinco,
      animal2.nome,
      animal2.lote,
      animal2.raca,
      animal2.sexo,
      animal2.data_nasc
    );
    cadastroAnimal.cadastroAnimalTerceiroAnimal(
      animal3.brinco,
      animal3.nome,
      animal3.lote,
      animal3.raca,
      animal3.sexo,
      animal3.data_nasc
    );
  });

  it("Não deve cadastrar um animal ja cadastrado, esperado um alert-danger", () => {
    cadastroAnimal.goToCadastroAnimaisRapido();
    cadastroAnimal.cadastroAnimalRepetido(
      animal1.brinco,
      animal1.nome,
      animal1.lote,
      animal1.raca,
      animal1.sexo,
      animal1.data_nasc
    );
  });
});
