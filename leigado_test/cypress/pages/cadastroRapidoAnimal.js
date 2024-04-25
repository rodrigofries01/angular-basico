import Components from "../utils/components";

const components = new Components();

export default class CadastroRapidoAnimal {
  doLogin(email, password, name) {
    cy.get('app-input-text-custom[name="email"]').click().type(email);
    cy.get('app-input-text-custom[name="senha"]').click().type(password);
    cy.get('[type="button"]').contains("ENTRAR").click().wait(2000);
    cy.get('app-select-custom[class="ml-2 ng-star-inserted"]')
      .click()
      .wait(2000);
    cy.get('[name="pesquisar"]').type(name).wait(2000);
    cy.get('[role="option"]').eq(0).click().wait(2000);
  }

  goToCadastroAnimaisRapido() {
    cy.get("button").contains("Cadastro").click();
    cy.get('[routerlink="/menu/cadastro/animal"]').click();
    cy.get("button").contains("Cadastro Rápido").click();
  }

  cadastroAnimalPrimeiroAnimal(brinco, nome, lote, raca, sexo, data) {
    components.preencheInput("brinco", 0, brinco);
    components.preencheInput("nome", 0, nome);
    components.selecionaInputSelect("lote", 0, lote);
    components.selecionaInputSelect("raca", 0, raca);
    components.selecionaInputSelect("sexo", 0, sexo);
    components.inputDate("dtNascimento", 0, data);
  }

  cadastroAnimalSegundoAnimal(brinco, nome, lote, raca, sexo, data) {
    components.preencheInput("brinco", 1, brinco);
    components.preencheInput("nome", 1, nome);
    components.selecionaInputSelect("lote", 1, lote);
    components.selecionaInputSelect("raca", 1, raca);
    components.selecionaInputSelect("sexo", 1, sexo);
    components.inputDate("dtNascimento", 1, data);
  }

  cadastroAnimalTerceiroAnimal(brinco, nome, lote, raca, sexo, data) {
    components.preencheInput("brinco", 2, brinco);
    components.preencheInput("nome", 2, nome);
    components.selecionaInputSelect("lote", 2, lote);
    components.selecionaInputSelect("raca", 2, raca);
    components.selecionaInputSelect("sexo", 2, sexo);
    components.inputDate("dtNascimento", 2, data);
    components.save("success"); //resultado esperado nesse caso
  }

  cadastroAnimalRepetido(brinco, nome, lote, raca, sexo, data) {
    components.preencheInput("brinco", 0, brinco);
    components.preencheInput("nome", 0, nome);
    components.selecionaInputSelect("lote", 0, lote);
    components.selecionaInputSelect("raca", 0, raca);
    components.selecionaInputSelect("sexo", 0, sexo);
    components.inputDate("dtNascimento", 0, data);
    components.save("danger"); //resultado esperado nesse caso
  }
}
