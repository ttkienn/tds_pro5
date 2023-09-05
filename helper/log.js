const chalk = require("chalk");

const colors = {
  red: "#ff0000",
  green: "#00ff00",
  yellow: "#ffff00",
  blue: "#0000ff",
  magenta: "#ff00ff",
  cyan: "#00ffff",
  white: "#ffffff",
  gray: "#808080",
  ocean: "#00bfff",
};

function getColorHex(colorName) {
  return colors[colorName] || "";
}

var log = async (messages) => {
  const logMessage = messages
    .map(({ message, color }) => {
      const hexColor = getColorHex(color);
      return hexColor ? chalk.hex(hexColor)(message) : message;
    })
    .join("");

  console.log(logMessage);
};

module.exports = {
  log
}
