const dayjs = require("dayjs");

export default class Components {
  //clicar fora da tela
  clickOut() {
    cy.get("body").trigger("keydown", { keyCode: 27 });
  }

  //preencher os inputs de texto
  preencheInput(selecionaInput, posicao, digitarValorCampo) {
    cy.get(`[name="${selecionaInput}"]`)
      .eq(`${posicao}`)
      .click()
      .type(digitarValorCampo)
      .wait(1000);
  }

  //seleciona os inputs de select
  selecionaInputSelect(selecionaInput, posicao) {
    cy.get(`[name="${selecionaInput}"]`).eq(`${posicao}`).click().wait(500);
    //escolhe a primeira opção do select
    cy.get('[role="option"]').eq(`${posicao}`).click().wait(500);
    this.clickOut();
  }

  inputDate(nameInput, posicao, date) {
    cy.get(`[formcontrolname="${nameInput}"]`)
      .eq(`${posicao}`)
      .click()
      .type(dayjs(date).format("YYYY-MM-DD"));
  }

  save(result) {
    cy.get('[type="button"]').contains(" Salvar ").click();
    cy.get(`.alert-${result}`).should("contain.class", `alert-${result}`);
  }
}
