// test validating the data
import { expect } from "chai";
import { privateKeyToAccount } from "viem/accounts";
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
    const PRIVATE_KEY = process.env.PRIVATE_KEY as `0x${string}`;
    const account = privateKeyToAccount(PRIVATE_KEY as `0x${string}`);
    let res = await interactDefaults(data, 1n, "post", account);
    console.log(res.receipt);
    expect(res.success).to.be.true;
  });
});
