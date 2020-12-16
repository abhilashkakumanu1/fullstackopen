const config = require("./utils/config.js");
const app = require("./app.js");

const PORT = config.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
