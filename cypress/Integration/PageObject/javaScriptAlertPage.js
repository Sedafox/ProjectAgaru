import base from "./base";

class JavaScriptAlertPage extends base{
    clickForJSAlertBttn() { return cy.get('button[onclick="jsAlert()"]') }
    clickForJSConfirmBttn() { return cy.get('button[onclick="jsConfirm()"]') }
    clickForJSPromptBttn() { return cy.get('button[onclick="jsPrompt()"]') }
    afterResult() { return cy.get('#result') }
}
export default JavaScriptAlertPage