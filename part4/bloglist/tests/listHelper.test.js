const dummy = require("../utils/list_helper.js").dummy;

test("dummy returns one", () => {
  expect(dummy()).toBe(1);
});
