import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import { cvData } from "../src/data/cv-data";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.resolve(__dirname, "..", "Edgar_Voskanayan_CV.pdf");

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildHtml(): string {
  const skillsFrontend = cvData.skills.frontend.map((s) => s.name).join(" · ");
  const skillsTools = cvData.skills.tools.map((s) => s.name).join(" · ");
  const skillsOther = cvData.skills.other.join(" · ");

  const experienceHtml = cvData.experience
    .map(
      (job) => `
        <section class="block">
          <div class="row">
            <h3>${escapeHtml(job.role)} — ${escapeHtml(job.company)}</h3>
            <span class="period">${escapeHtml(job.period)}</span>
          </div>
          <ul>
            ${job.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
          <p class="tech"><strong>Tech:</strong> ${escapeHtml(job.tech.join(" · "))}</p>
        </section>`
    )
    .join("");

  const projectsHtml = cvData.projects
    .map(
      (project) => `
        <section class="block project">
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
          <p class="tech"><strong>Tech:</strong> ${escapeHtml(project.tech.join(" · "))}</p>
        </section>`
    )
    .join("");

  const educationHtml = cvData.education
    .map(
      (item) => `
        <section class="block">
          <div class="row">
            <h3>${escapeHtml(item.degree)} — ${escapeHtml(item.institution)}</h3>
            <span class="period">${escapeHtml(item.period)}</span>
          </div>
          <p>${escapeHtml(item.description)}</p>
        </section>`
    )
    .join("");

  const languagesHtml = cvData.languages
    .map((lang) => `${escapeHtml(lang.name)} (${escapeHtml(lang.level)})`)
    .join(" · ");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(cvData.name)} — CV</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      color: #111;
      font-size: 10.5pt;
      line-height: 1.45;
      margin: 0;
      padding: 0;
    }
    .page { padding: 0; }
    header { margin-bottom: 14px; border-bottom: 1px solid #ddd; padding-bottom: 10px; }
    h1 { font-size: 22pt; margin: 0 0 4px; }
    .title { font-size: 12pt; color: #333; margin: 0 0 6px; }
    .tagline { margin: 0 0 8px; color: #444; }
    .contacts { font-size: 9.5pt; color: #333; }
    h2 {
      font-size: 11pt;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      border-bottom: 1px solid #ccc;
      padding-bottom: 3px;
      margin: 16px 0 8px;
    }
    .block { margin-bottom: 10px; page-break-inside: avoid; }
    .row {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: baseline;
    }
    h3 { font-size: 10.5pt; margin: 0; }
    .period { font-size: 9.5pt; color: #555; white-space: nowrap; }
    ul { margin: 6px 0 4px; padding-left: 18px; }
    li { margin-bottom: 3px; }
    p { margin: 4px 0; }
    .tech { font-size: 9.5pt; color: #333; }
    .about p { margin-bottom: 6px; }
    .skills p { margin-bottom: 4px; }
    .project p { margin-top: 4px; }
  </style>
</head>
<body>
  <div class="page">
    <header>
      <h1>${escapeHtml(cvData.name)}</h1>
      <p class="title">${escapeHtml(cvData.title)}</p>
      <p class="tagline">${escapeHtml(cvData.tagline)}</p>
      <p class="contacts">
        ${escapeHtml(cvData.contacts.phone)} ·
        ${escapeHtml(cvData.contacts.email)} ·
        ${escapeHtml(cvData.contacts.linkedin)}
      </p>
    </header>

    <h2>About</h2>
    <div class="about">
      ${cvData.about.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
    </div>

    <h2>Skills</h2>
    <div class="skills">
      <p><strong>Frontend:</strong> ${escapeHtml(skillsFrontend)}</p>
      <p><strong>Tools:</strong> ${escapeHtml(skillsTools)}</p>
      <p><strong>Also familiar with:</strong> ${escapeHtml(skillsOther)}</p>
    </div>

    <h2>Experience</h2>
    ${experienceHtml}

    <h2>Projects</h2>
    ${projectsHtml}

    <h2>Education</h2>
    ${educationHtml}

    <h2>Languages</h2>
    <p>${languagesHtml}</p>
  </div>
</body>
</html>`;
}

async function main() {
  const html = buildHtml();
  const tempHtmlPath = path.resolve(__dirname, "cv-print.html");
  fs.writeFileSync(tempHtmlPath, html, "utf8");

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`file://${tempHtmlPath}`, { waitUntil: "networkidle0" });
  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: { top: "14mm", right: "14mm", bottom: "14mm", left: "14mm" },
  });
  await browser.close();
  fs.unlinkSync(tempHtmlPath);

  console.log(`PDF saved to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
