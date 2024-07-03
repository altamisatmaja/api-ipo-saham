import express from "express";
import cloudscraper from "cloudscraper";
import { JSDOM } from "jsdom";

const app = express();
const port = 3000;

app.get("/api/index", async (req, res) => {
  try {
    const html = await cloudscraper.get("https://www.e-ipo.co.id/id/ipo/index");

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const data = [];
    const elements = document.querySelectorAll(".pricing-box");

    elements.forEach((element) => {
      const companyNameElement = element.querySelector("h5.nobottommargin");
      const companyCodeElement = element.querySelector("span.label");
      const listItems = element.querySelectorAll("div.pricing-features > ul > li");

      let companySector = "";
      let offeringPeriod = "";

      listItems.forEach(item => {
        const titleElement = item.querySelector("h5.nobottommargin");
        const valueElement = item.querySelector("p.notopmargin");

        if (titleElement && valueElement) {
          const titleText = titleElement.textContent.trim();
          const valueText = valueElement.textContent.trim();

          if (titleText === "Sektor") {
            companySector = valueText;
          } else if (titleText === "Tanggal Pencatatan") {
            offeringPeriod = valueText;
          }
        }
      });

      if (companyNameElement && companyCodeElement && companySector && offeringPeriod) {
        const fullText = companyNameElement.textContent.trim();
        const codeMatch = fullText.match(/\(([^)]+)\)/);
        const companyCode = codeMatch ? codeMatch[1] : "N/A";
        let companyName = fullText.replace(/\([^)]+\)/, "").trim();

        const tbkIndex = companyName.indexOf("Tbk");
        if (tbkIndex !== -1) {
          companyName = companyName.substring(0, tbkIndex + 3).trim();
        }

        const companyType = companyCodeElement.textContent.trim();

        data.push({
          name: companyName,
          code: companyCode,
          type: companyType,
          sector: companySector,
          offering_period: offeringPeriod,
        });
      }
    });

    res.send({
      status: "success",
      message: "Data berhasil didapatkan",
      data: data,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send({
      error: "Failed to fetch data",
      details: error.message,
    });
  }
});

app.listen(port, () => console.log(`API IPO Saham listening on port ${port}!`));
