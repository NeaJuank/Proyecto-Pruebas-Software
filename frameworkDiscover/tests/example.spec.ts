import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173");
});

test.describe("Framework Explorer - Básico", () => {
  test("debería mostrar el título de la página", async ({ page }) => {
    await expect(page).toHaveTitle(/Vite \+ React \+ TS/i);
  });

  test("debería mostrar estadísticas iniciales", async ({ page }) => {
    const stats = page.getByText(/Total frameworks/i);
    await expect(stats).toBeVisible();
  });

  test("debería filtrar frameworks por búsqueda", async ({ page }) => {
  const searchBox = page.getByPlaceholder(/search/i);
  await searchBox.fill("Laravel");

  const result = page.getByRole("heading", { name: "Laravel" });
  await expect(result).toBeVisible();
});


  test("debería mostrar mensaje de 'no results' si no encuentra nada", async ({ page }) => {
    const searchBox = page.getByPlaceholder(/search/i);
    await searchBox.fill("noexiste123");

    await expect(page.getByText(/No frameworks found/i)).toBeVisible();
  });
});

test.describe("Framework Explorer - Modal", () => {
  test("debería abrir modal al hacer clic en ver detalles", async ({ page }) => {
    const firstCard = page.locator("button:has-text('View Details')").first();
    await firstCard.click();

    const modal = page.getByRole("dialog");
    await expect(modal).toBeVisible();

    const closeBtn = page.getByRole("button", { name: /close/i });
    await closeBtn.click();
    await expect(modal).toBeHidden();
  });
});
