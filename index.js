import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{ message: "Type the URL", name: "URL" }])
  .then((answers) => {
    const url = answers.URL;

    var qr_svg = qr.image(url, { type: "png" });
    qr_svg.pipe(fs.createWriteStream(`${url}.png`));

    var svg_string = qr.imageSync("I love QR!", { type: "svg" });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
