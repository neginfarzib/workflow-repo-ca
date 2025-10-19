import { test, expect } from "@playwright/test";

test.describe("Login", () => {
  test("User can successfully log in with valid credentials ", async ({
    page,
  }) => {
    await page.goto("/login/index.html");

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    await page.locator('button[type="submit"]').click();

    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login/index.html");

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("invalidpassword");

    await page.locator('button[type="submit"]').click();

    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
