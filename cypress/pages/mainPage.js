class BasePage {
  calendarButton = () => this.header().find("a[href='/apps/calendar'] > svg");
  chatButton = () => this.header().find("a[href='/apps/chat'] > svg");
  darkLightButton = () => cy.get(":nth-child(2) > .block");
  header = () => cy.get("header");
  languageButton = () => cy.get(":nth-child(3) > .block");
  messagesButton = () => cy.get(":nth-child(4) > .block");
  notificationsButton = () => cy.get(":nth-child(5) > .block");
  profileButton = () => cy.get(".dropdown.flex > .relative > .h-9");
  searchBar = () => cy.get(".peer");
  sidebar = () => cy.get(".scrollbar-container > .relative");
  toDoListButton = () => this.header().find("a[href='/apps/todolist'] > svg");

  navigateToSidebarOption(menuOption) {
    this.sidebar().contains(menuOption).click();
  }

  validateTopBarElements() {
    this.calendarButton().should("be.visible");
    this.toDoListButton().should("be.visible");
    this.chatButton().should("be.visible");
    this.searchBar().should("be.visible");
    this.darkLightButton().should("be.visible");
    this.languageButton().should("be.visible");
    this.messagesButton().should("be.visible");
    this.notificationsButton().should("be.visible");
    this.profileButton().should("be.visible");
  }
}

export default BasePage;
