import { faker } from "@faker-js/faker";

export default function generateRandomHTML(length: number): string {
  let htmlContent = "";
  let remainingLength = length;

  while (remainingLength > 0) {
    const randomTag = [
      "h1",
      "h2",
      "h3",
      "p",
      "div",
      "table",
      "ul",
      "ol",
      "blockquote",
      "pre",
    ][Math.floor(Math.random() * 10)];

    switch (randomTag) {
      case "table":
        // Generate table structure
        htmlContent += "<table>";
        const numRows = Math.floor(Math.random() * 5) + 1; // Random number of rows
        for (let i = 0; i < numRows; i++) {
          htmlContent += "<tr>";
          const numCols = Math.floor(Math.random() * 5) + 1; // Random number of columns per row
          for (let j = 0; j < numCols; j++) {
            htmlContent += `<td>${faker.lorem.words(5)}</td>`; // Generate content for each cell
          }
          htmlContent += "</tr>";
        }
        htmlContent += "</table>";
        break;

      case "ul":
      case "ol":
        // Generate list structure
        htmlContent += `<${randomTag}>`;
        const numItems = Math.floor(Math.random() * 5) + 1; // Random number of list items
        for (let i = 0; i < numItems; i++) {
          htmlContent += `<li>${faker.lorem.words(10)}</li>`; // Generate content for each list item
        }
        htmlContent += `</${randomTag}>`;
        break;

      case "blockquote":
      case "pre":
        // Generate blockquote or preformatted text
        htmlContent += `<${randomTag}>${faker.lorem.paragraphs()}</${randomTag}>`;
        break;

      default:
        // Generate other tags
        const tagLength = Math.floor(Math.random() * 100) + 20; // Random length for the tag
        const tagContent = faker.lorem.words(Math.floor(tagLength / 10)); // Generate content for the tag
        htmlContent += `<${randomTag}>${tagContent}</${randomTag}>`;
        break;
    }

    remainingLength -= htmlContent.length; // Adjust remaining length
  }

  return htmlContent;
}
