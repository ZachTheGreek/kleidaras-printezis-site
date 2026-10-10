import puppeteer from 'puppeteer';
import { mkdir, readdir } from 'node:fs/promises';

const url = process.argv[2] ?? 'http://localhost:3000';
const label = process.argv[3];
const dir = 'temporary screenshots';

await mkdir(dir, { recursive: true });
const nums = (await readdir(dir))
  .map((f) => /^screenshot-(\d+)/.exec(f)?.[1])
  .filter(Boolean)
  .map(Number);
const n = (nums.length ? Math.max(...nums) : 0) + 1;
const out = `${dir}/screenshot-${n}${label ? `-${label}` : ''}.png`;

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0' });
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log(out);
