// test validating the data
import { expect } from "chai";
import { interactDefaults } from "../src";

describe("test create post", () => {
  it("interact with post", async () => {
    const data = {
      from: "1",
      post: "This is the first post, for testing!",
      image: "imageurl",
      dateOf: new Date().toLocaleString(),
    };

    // validte the incoming data is in the correct format
    let res = await interactDefaults(data, 1n, "post");
    console.log(res.receipt);
    expect(res.success).to.be.true;
  });
});
