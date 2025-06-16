import { test, expect } from '@playwright/test';

test.describe('E2E Tests for Spanish Flashcards App', () => {
  test.beforeEach(async ({ page }) => {
    // Inject CSS to disable all animations and transitions
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          transition-duration: 0s !important;
          animation-duration: 0s !important;
        }
      `,
    });
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

  test('should flip the card, show answer buttons, and advance to the next card', async ({
    page,
  }) => {
    // Go to the "Animals" study category
    await page.goto('/study/animals');

    const cardContainer = page.getByTestId('flashcard-container');
    const cardFront = page.getByTestId('flashcard-front');
    const rightButton = page.getByRole('button', { name: /right/i });
    const wrongButton = page.getByRole('button', { name: /wrong/i });
    const card2FrontText = page.getByText('el perro');

    // Check that the card is not flipped initially
    await expect(cardContainer.locator('> div')).toHaveCSS(
      'transform',
      'none'
    );
    await expect(rightButton).not.toBeVisible();
    await expect(wrongButton).not.toBeVisible();

    // Click to flip the card
    await cardFront.click();

    // Check that the card is flipped
    await expect(cardContainer.locator('> div')).not.toHaveCSS(
      'transform',
      'none'
    );
    await expect(rightButton).toBeVisible();
    await expect(wrongButton).toBeVisible();

    // Click the "Right" button
    await rightButton.click();

    // Check that the next card is shown and is not flipped
    await expect(cardContainer.locator('> div')).toHaveCSS(
      'transform',
      'none'
    );
    await expect(card2FrontText).toBeVisible();
    await expect(rightButton).not.toBeVisible();
    await expect(wrongButton).not.toBeVisible();
  });
}); 