var chalk = require("chalk");

module.exports = {
  headers: {
    authority: "www.facebook.com",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "vi",
    "sec-ch-prefers-color-scheme": "light",
    "sec-ch-ua": '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.203",
    "viewport-width": "1366",
    "upgrade-insecure-requests": "1",
  },
  bannerText: `${chalk.bold("~ " + chalk.green("Tool :") + chalk.bold.white(" TraoDoiSub Page Pro5"))}\n${chalk.bold("~ " + chalk.green("Author :") + chalk.bold.white(" Thiệu Trung Kiên"))}\n${chalk.bold("~ " + chalk.green("Thời gian :") + chalk.bold.white(` ${new Date().toLocaleDateString("vi-VN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}`))}\n${chalk.bold("~ " + chalk.green("Facebook :") + chalk.bold.white(" https://facebook.com/ThieuTrungKi3n/"))}\n${chalk.bold(
    "~ " + chalk.green("Github :") + chalk.bold.white(" https://github.com/TrunqKj3n")
  )}\n${chalk.bold.red("────────────────────────────────────────────────────────────\n")}`,
};
