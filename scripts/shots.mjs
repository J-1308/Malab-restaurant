// Visual QA: screenshots at desktop (1440) and mobile (390).
//
//   npm run shots                     # home page, http://localhost:3000
//   npm run shots -- / /menu          # several pages
//   BASE_URL=https://… npm run shots  # a preview deployment
//
// Writes shots/<page>-<desktop|mobile>-<fold|full>.png. shots/ is gitignored.
// PW_CHROMIUM=/path/to/chrome uses an existing browser instead of Playwright's own.
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const base = process.env.BASE_URL ?? "http://localhost:3000";
const paths = process.argv.slice(2).length ? process.argv.slice(2) : ["/"];

const viewports = [
  { name: "desktop", viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
  {
    name: "mobile",
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  },
];

await mkdir("shots", { recursive: true });
const browser = await chromium.launch({
  executablePath: process.env.PW_CHROMIUM || undefined,
});

try {
  for (const { name, ...options } of viewports) {
    const context = await browser.newContext(options);
    const page = await context.newPage();

    for (const path of paths) {
      const url = new URL(path, base).href;
      await page.goto(url, { waitUntil: "load" });

      // Scroll through once so lazy images and scroll-triggered content load.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight / 2) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 120));
        }
        window.scrollTo(0, 0);
      });
      // Load every image, lazy ones included, and wait for them (capped at 10 s).
      await page.evaluate(() => {
        const pending = [...document.images].filter((img) => !img.complete);
        for (const img of pending) img.loading = "eager";
        return Promise.race([
          Promise.all(
            pending.map(
              (img) =>
                new Promise((resolve) => {
                  img.addEventListener("load", resolve, { once: true });
                  img.addEventListener("error", resolve, { once: true });
                }),
            ),
          ),
          new Promise((resolve) => setTimeout(resolve, 10_000)),
        ]);
      });
      await page.waitForTimeout(500);

      const slug = path === "/" ? "home" : path.replace(/^\/|\/$/g, "").replaceAll("/", "-");
      await page.screenshot({ path: `shots/${slug}-${name}-fold.png` });
      await page.screenshot({ path: `shots/${slug}-${name}-full.png`, fullPage: true });
      console.log(`✓ ${url} · ${name}`);
    }

    await context.close();
  }
} finally {
  await browser.close();
}
