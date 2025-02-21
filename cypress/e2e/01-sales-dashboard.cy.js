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
    salesPage.openRevenueMenu();

    // validate that the menu options are visible
    salesPage.validateRevenueMenuOptions();
  });

  it("04 - Functionality Tests: 3 dot menu works for Summary section", () => {
    // visit the sales dashboard
    cy.visit("/");

    // click on the 3 dot menu for the Summary section
    salesPage.openSummaryMenu();

    // validate that the menu options are visible
    salesPage.validateSummaryMenuOptions();
  });

  it("05 - Functionality Tests: 3 dot menu works for Transactions section", () => {
    // visit the sales dashboard
    cy.visit("/");

    // click on the 3 dot menu for the Summary section
    salesPage.openTransactionsMenu();

    // validate that the menu options are visible
    salesPage.validateTransactionsMenuOptions();
  });

  it("06 - UI Verification:: Top bar buttons are showing on Sales Dashboard", () => {
    // visit the sales dashboard
    cy.visit("/");

    // Validate all top bar elements are visible
    salesPage.validateTopBarElements();
  });

  it("07 - Mobile Viewport Tests: Verify the Sales Dashboard is responsive", () => {
    const sizes = ["iphone-8", "ipad-2", "ipad-mini", "samsung-s10"];
    sizes.forEach((size) => {
      // set the viewport to mobile
      cy.viewport(size);

      // visit the sales dashboard
      cy.visit("/");

      // Validate all sections from sales dashboard are visible
      salesPage.validatePanelsAreVisible();

      // Validate user can click on dropdowns in mobile viewport
      salesPage.openRevenueMenu();
      salesPage.validateRevenueMenuOptions();
    });
  });
});
