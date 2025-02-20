import BasePage from "./mainPage";

class salesPage extends BasePage {
  dailySalesPanel = () => cy.get(".panel").contains("Daily Sales");
  recentActivitiesPanel = () => cy.get(".panel").contains("Recent Activities");
  recentOrdersPanel = () => cy.get(".panel").contains("Recent Orders");
  revenuePanel = () => cy.get(".panel").contains("Revenue");
  revenueMenuButton = () =>
    this.revenuePanel().parentsUntil(".panel").find(".dropdown");
  salesByCategoryPanel = () => cy.get(".panel").contains("Sales By Category");
  summaryPanel = () => cy.get(".panel").contains("Summary");
  summaryMenuButton = () =>
    this.summaryPanel().parentsUntil(".panel").find(".dropdown");
  topSellingProductsPanel = () =>
    cy.get(".panel").contains("Top Selling Product");
  totalOrdersPanel = () => cy.get(".panel").contains("Total Orders");
  transactionsPanel = () => cy.get(".panel").contains("Transactions");
  transactionsMenuButton = () =>
    this.transactionsPanel().parentsUntil(".panel").find(".dropdown");
  walletBalancePanel = () => cy.get(".panel").contains("Wallet Balance");

  visit() {
    cy.visit("/");
  }
  title() {
    return cy.contains("Vristo");
  }

  validatePanelsAreVisible() {
    this.revenuePanel().should("be.visible");
    this.salesByCategoryPanel().should("be.visible");
    this.dailySalesPanel().should("be.visible");
    this.summaryPanel().should("be.visible");
    this.totalOrdersPanel().should("be.visible");
    this.recentActivitiesPanel().should("be.visible");
    this.transactionsPanel().should("be.visible");
    this.walletBalancePanel().should("be.visible");
    this.recentOrdersPanel().should("be.visible");
    this.topSellingProductsPanel().should("be.visible");
  }
}

export default new salesPage();
