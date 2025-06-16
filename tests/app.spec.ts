import { test, expect } from '@playwright/test';

test.describe('E2E Tests for Spanish Flashcards App', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the home page before each test
    await page.goto('/');
  });

  test('should display the homepage and header', async ({ page }) => {
    // Check for the welcome message on the homepage
    await expect(
      page.getByRole('heading', { name: /spanish flashcards/i })
    ).toBeVisible();

    // Check that the "Welcome to" text is not present
    await expect(
      page.getByRole('heading', { name: /welcome to/i })
    ).not.toBeVisible();

    // Check for navigation links in the header
    await expect(page.getByRole('link', { name: /study/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /quiz/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /stats/i })).toBeVisible();
  });

  test('should navigate to the study categories page and show an active badge', async ({
    page,
  }) => {
    const studyLink = page.getByRole('link', { name: /study/i });

    // Click the "Study" link
    await studyLink.click();

    // Check that the URL is correct
    await expect(page).toHaveURL('/study');

    // Check for the "Select a Category" heading
    await expect(
      page.getByRole('heading', { name: /select a category/i })
    ).toBeVisible();

    // Check for the active badge on the "Study" link
    await expect(studyLink.locator('span')).toBeVisible();
  });

  test('should navigate through the study flow for a category', async ({
    page,
  }) => {
    // Go to the category selection page
    await page.goto('/study');

    // Click the "Animals" category
    await page.getByRole('link', { name: /animals/i }).click();

    // Check that the URL is correct
    await expect(page).toHaveURL('/study/animals');

    // Check that the category title is displayed
    await expect(page.getByRole('heading', { name: /animals/i })).toBeVisible();

    // Check for the flashcard content
    await expect(page.getByText('el gato')).toBeVisible();

    // Click to flip the card
    await page.getByText('el gato').click();
    await expect(page.getByText('the cat')).toBeVisible();

    // Click the "Next" button
    await page.getByRole('button', { name: /next/i }).click();
    await expect(page.getByText('el perro')).toBeVisible();

    // Check the card counter
    await expect(page.getByText('2 / 2')).toBeVisible();
  });
}); 