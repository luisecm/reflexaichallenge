import salesPage from "../pages/salesPage";

describe("Sales Dashboard Tests", () => {
  it("01 - Navigation Tests: Ensure users can reach the Sales Dashboardd", () => {
    // visit the sales dashboard
    cy.visit("/");

    // check that the page contains the title of site
    cy.contains("Vristo");
  });

  it("02 - Navigation Tests: Ensure users can see all sections from Sales Dashboard", () => {
    // visit the sales dashboard
    cy.visit("/");

    // Validate all sections from sales dashboard are visible
    salesPage.validatePanelsAreVisible();
  });

  it("03 - Functionality Tests: 3 dot menu works for Revenue section", () => {
    // visit the sales dashboard
    cy.visit("/");

    // click on the 3 dot menu for the Revenue section
    salesPage.revenueMenuButton().click();

    // validate that the menu options are visible
    cy.contains("Weekly").should("be.visible");
    cy.contains("Monthly").should("be.visible");
    cy.contains("Yearly").should("be.visible");
  });

  it("04 - Functionality Tests: 3 dot menu works for Summary section", () => {
    // visit the sales dashboard
    cy.visit("/");

    // click on the 3 dot menu for the Summary section
    salesPage.summaryMenuButton().click();

    // validate that the menu options are visible
    cy.contains("View Report").should("be.visible");
    cy.contains("Edit Report").should("be.visible");
    cy.contains("Mark as Done").should("be.visible");
  });

  it("05 - Functionality Tests: 3 dot menu works for Transactions section", () => {
    // visit the sales dashboard
    cy.visit("/");

    // click on the 3 dot menu for the Summary section
    salesPage.transactionsMenuButton().click();

    // validate that the menu options are visible
    cy.contains("View Report").should("be.visible");
    cy.contains("Edit Report").should("be.visible");
    cy.contains("Mark as Done").should("be.visible");
  });

  it("06 - UI Verification:: Top bar buttons are showing on Sales Dashboard", () => {
    // visit the sales dashboard
    cy.visit("/");

    // Validate all top bar elements are visible
    salesPage.validateTopBarElements();
  });

  it("07 - UI Verification: Validate that key components exist and match expected properties", () => {});

  it("08 - Chart Interaction Tests: Verify tooltips and hover effects", () => {});

  it("09 - Mobile Viewport Tests: Verify the Sales Dashboard is responsive", () => {
    // set the viewport to mobile
    cy.viewport("iphone-8");

    // visit the sales dashboard
    cy.visit("/");

    // Validate all sections from sales dashboard are visible
    salesPage.validatePanelsAreVisible();

    // Validate user can click on dropdowns in mobile viewport
    salesPage.revenueMenuButton().click();
    cy.contains("Weekly").should("be.visible");
    cy.contains("Monthly").should("be.visible");
    cy.contains("Yearly").should("be.visible");
  });
});
