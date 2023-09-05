var EventEmitter = require("events");
var custom = require("./log");
var { stdout } = process;
var { bannerText } = require("../config");
class handleEvent extends EventEmitter {
  constructor() {
    super();
    this.on("error", (err) => {
      custom.log([
        {
          message: "[ ERROR ]: ",
          color: "red",
        },
        {
          message: `Đã xảy ra lỗi tại function : ${err} - Vui lòng liên hệ admin để sửa lỗi!`,
          color: "white",
        },
      ]);
    });
    this.on("listPage", async (data) => {
      try {
        for (let [index, value] of data.entries()) {
          custom.log([
            {
              message: "[ PAGE ]: ",
              color: "yellow",
            },
            {
              message: `STT: ${index + 1} | ID: ${value?.profile?.id} | NAME: ${value?.profile?.name}`,
              color: "white",
            },
          ]);
        }
      } catch (err) {
        this.emit("error", err);
      }
    });
    this.on("ready", async (data) => {
      for (const char of bannerText) {
        stdout.write(char);
        await this.sleep(5);
      }
      this.emit("readyFinished");
    });
  }
  async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

module.exports = handleEvent;
