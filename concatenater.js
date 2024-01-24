const fs = require("fs");
const path = require("path");

const inputFolder = "./dist";
// This has to match your ccb file name.
// If you want to use a custom name, say your ccb file is named mygame.ccb then change outputFile to "mygame.js"
const outputFile = "./coppercube/game.js";

// Make a list of files that will be included
// You most probably want to add all *.js files in the dist folder
const files = [
  "utils.js",
  "index.js"
]

function concatenateFiles() {
  const fileContents = files.map((filename) => {
    const filePath = path.join(inputFolder, filename);

    try {
      const content = fs.readFileSync(filePath, "utf8");
      return `// Contents of ${filename}\n${content}\n\n`;
    } catch (error) {
      console.error(`Error reading file ${filename}:`, error);
      return "";
    }
  });

  // Write concatenated content to the output file
  try {
    fs.writeFileSync(outputFile, fileContents.join(""), "utf8");
    console.log(`Files successfully concatenated to ${outputFile}`);
  } catch (error) {
    console.error("Error writing to output file:", error);
  }
}

// Call the function to concatenate files

fs.watch("./dist", (eventType, filename) => {
  //console.log("\nThe file", filename, "was modified!");
  //console.log("The type of change was:", eventType);

  concatenateFiles();
});
