import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("Verifies that when the venue details page loads there are the words “Venue details” in the heading ", async ({
    page,
  }) => {
    await page.goto("/index.html");

    await page.waitForSelector(".bg-cover.bg-center.h-64.rounded-lg.shadow-md");

    // const venues = await page.locator(
    //   ".bg-cover.bg-center.h-64.rounded-lg.shadow-md",
    // );
    /* Testing if the waiting for venues to be loaded is working */
    // const venueCount = await venues.count();
    // console.log(`Number of venues found: ${venueCount}`);
    // await expect(venueCount).toBeGreaterThan(0);

    // Wait for all venues to load
    await page.waitForSelector("#venue-container a");

    // Get all venue links
    const venues = page.locator("#venue-container a");

    // Count them (just to log)
    const count = await venues.count();
    console.log(`Number of venues found: ${count}`);

    // Expect at least one venue
    expect(count).toBeGreaterThan(0);

    // Click the first venue
    await venues.first().click();

    // Wait for navigation to finish (no network requests for at least 500 ms)
    await page.waitForLoadState("networkidle");

    // Verify the page URL contains /venue/
    await expect(page).toHaveURL(/\/venue\/\?id=/);

    // Verify the heading contains "Venue details"
    const heading = page.locator("main h1");
    await expect(heading).toContainText("Venue details");
  });
});
