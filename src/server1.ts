import express from "express";
import ejs from "ejs";
import path from "path";
// import puppeteer from 'puppeteer';

const app = express();

const port = 5000;

const passengers = [
  {
    name: "Joyce",
    flightNumber: 7859,
    time: "18h00",
  },
  {
    name: "Brock",
    flightNumber: 7859,
    time: "18h00",
  },
  {
    name: "Eve",
    flightNumber: 7859,
    time: "18h00",
  },
];
/* 
app.get('/pdf', async(request, response) => {

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:3000/', {
      waitUntil: 'networkidle0'
  })

  const pdf = await page.pdf({
      printBackground: true,
      format: 'Letter'
  })

  await browser.close()

  response.contentType("application/pdf")

  return response.send(pdf)

})
 */
app.get("/", (req, response) => {
  const filePath = path.join(__dirname, "print.ejs");

  ejs.renderFile(filePath, { passengers }, (err, html) => {
    if (err) {
      return response.send("Erro na leitura do arquivo");
    }

    return response.send(html);
  });
  return response.status(200).send(passengers);
});

// const filePath = path.join(__dirname, "print.ejs");
// console.log(filePath);

app.listen(port, () => console.log(`Running on port ${port}`));
