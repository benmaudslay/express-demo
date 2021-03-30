const fs = require("fs");

const saveTask = (task) => {
  fs.writeFileSync("src/tasks.txt", task);
};

module.exports = {
  saveTask,
};
