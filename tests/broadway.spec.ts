import { test, expect } from '@playwright/test';

test('can access', async ({ page }) => {
    await page.goto('https://lottery.broadwaydirect.com/show/dbh-nyc/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("DEATH BECOMES HER (NY) – Broadway Direct Lottery");

    const links = await page.getByRole("link", { name: /Closed/i }).all();

    expect(links.length).toBeGreaterThan(0);
});

