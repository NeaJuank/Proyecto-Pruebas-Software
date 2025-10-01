import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  // Cargar tu aplicación
  await page.goto("http://localhost:5173");
});

test.describe("Framework Explorer - Básico", () => {
  test("debería mostrar el título de la página", async ({ page }) => {
    await expect(page).toHaveTitle(/Framework Explorer/i);
  });

  test("debería mostrar estadísticas iniciales", async ({ page }) => {
    const stats = page.getByText(/Total frameworks/i);
    await expect(stats).toBeVisible();
  });

  test("debería filtrar frameworks por búsqueda", async ({ page }) => {
    const searchBox = page.getByPlaceholder(/search/i);
    await searchBox.fill("Laravel");

    // Busca solo el título del framework React
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

    const modal = page.locator(".modal"); // usa la clase de tu modal si no tiene role="dialog"
    await expect(modal).toBeVisible();

    // Verifica que el modal tenga información del framework
    await expect(modal.locator("h2")).toBeVisible();
    await expect(modal.locator("p")).not.toBeEmpty();

    // Cierra el modal
    const closeBtn = modal.locator("button:has-text('Close')");
    await closeBtn.click();
    await expect(modal).toBeHidden();
  });

  test("debería cambiar la URL al abrir el modal (si usas rutas dinámicas)", async ({ page }) => {
    const firstCard = page.locator("button:has-text('View Details')").first();
    await firstCard.click();

    await expect(page).toHaveURL(/framework/); // espera algo como /framework/react
  });
});

test.describe("Framework Explorer - Avanzadas", () => {
  test("debería ordenar frameworks por popularidad", async ({ page }) => {
    const sortDropdown = page.getByRole("combobox", { name: /sort/i });
    await sortDropdown.selectOption("popularity");

    const firstCard = page.locator(".framework-card").first();
    await expect(firstCard).toContainText(/React|Angular|Vue/i); // depende de tu data
  });

  test("debería navegar entre secciones con la barra de navegación", async ({ page }) => {
    const navDocs = page.getByRole("link", { name: /docs/i });
    await navDocs.click();
    await expect(page).toHaveURL(/docs/);

    const navHome = page.getByRole("link", { name: /home/i });
    await navHome.click();
    await expect(page).toHaveURL("http://localhost:5173/");
  });

  test("debería mantener el estado de búsqueda al recargar la página", async ({ page }) => {
    const searchBox = page.getByPlaceholder(/search/i);
    await searchBox.fill("vue");

    await page.reload();
    await expect(searchBox).toHaveValue("vue");
  });

  test("debería funcionar correctamente en modo móvil", async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 375, height: 812 }, // iPhone X
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1",
    });
    const page = await context.newPage();
    await page.goto("http://localhost:5173");

    const menuBtn = page.locator("button:has-text('☰')");
    await menuBtn.click();
    await expect(page.locator("nav")).toBeVisible();

    await context.close();
  });
});
